const axios = require('axios');
const moment = require('moment');
const nodemailer = require('nodemailer')
const { ObjectId, ObjectID } = require('mongodb');
const bcrypt = require('bcrypt');
const userDataService = require('../data/userDataService');

class userService {

  async LoginUser(client, user) {
    const foundUser = await userDataService.FindUserByCredentials(client, user);

    if(foundUser._id) {
      const checkPassword = await bcrypt.compare(user.password, foundUser.password);
      if(checkPassword) {
        const payload = {
          user: {
            ...foundUser
          },
          status: true
        }
        return payload;
      }
      else {
        const payload = {
          status: false
        }
      }
    }
    else {
      const payload = {
        status: false
      }
      return payload;
    }
  }

  async CreateNewUser(client, user) {

    /**
     * ecrpyt password to store in database, using bcrypt it will automatically hash and salt a password.
     * @param {string} password 
     */
    const ecryptedPassword = await bcrypt.hash(user.password, 10);

    if(ecryptedPassword) {
      const insertUser = {
        ...user,
        "isDeleted": false,
        "securityLevel": 1,
        "role": "user",
        "isVerified": false,
        "dataCreated": moment.utc().unix(),
        "password": ecryptedPassword
      }
      console.log("business user", insertUser);
      const result = await userDataService.InsertUserIntoDatabase(client, insertUser);
    
      if(result === 1) {
        const payload = {
          user: {
            ...insertUser
          },
          status: await this.SendVerificationEmail(client, insertUser)
        }
        return payload;
      }
      else {
        console.log(err);
        return false;
      }
    } 
  }

  async SendVerificationEmail(client, user) {
    const collection = client.db("users").collection("verificationTokens");

    const verificationToken = {
      "dataCreated": moment.utc().unix(),
      "user_id": user._id.toString(),
    }

    const result = await collection.insertOne(verificationToken);

    const token_id = result?.insertedId;

    /**
     * Start nodemailer
     */

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'CollegeTrade', 
      to: user.email, 
      subject: 'Verify Email', 
      html: `
        <h3>Hi ${user.username},</h1>
        <br></br>
        <p>Please click <a href="http://localhost:3002/mongo/verifyEmail/${token_id}" target="_blank">this link</a> to verify your account</p>
      `, 
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    if(info) {
      return true;
    }
  }

  async verifyUserFromEmail(client, token_id) {
    const tokenCollection = client.db("users").collection("verificationTokens");
    const userCollection = client.db("users").collection("users");

    const token = await tokenCollection.findOne({
      "_id": ObjectId(`${token_id}`)
    });

    let timeVerification = false;
    if(moment.utc(token.dataCreated).isBetween(moment().utc().subtract(30, 'minutes').unix(), moment.utc().unix())) {
      console.log("is between");
      timeVerification = true;
    }
    else {
      return false;
    }

    const user = await userCollection.findOne({
      "_id": ObjectId(`${token.user_id}`)
    })

    if(user && timeVerification) {
      console.log("user", user)
      // need to switch isVerified on User if flag is true
      const didUpdate = await client.db('users').collection('users').updateOne(
        { "_id": user._id },
        {$set: { "isVerified": true } }
      )

      if(didUpdate.modifiedCount === 1) {
        const didDelete = await client.db('users').collection('verificationTokens').findOneAndDelete({
          "_id": ObjectID(`${token_id}`)
        })
        if(didDelete.value._id) {
          return true;
        }
      }
    }

    return false;

  }
}

module.exports = new userService;