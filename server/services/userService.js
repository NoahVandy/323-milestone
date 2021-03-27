const axios = require('axios');
const moment = require('moment');
const nodemailer = require('nodemailer')
const { ObjectId } = require('mongodb');

class userService {

  async SendVerificationEmail(client, user) {
    const collection = client.db("verificationTokens").collection("tokens");

    const verificationToken = {
      "dataCreated": moment.utc().unix(),
      "user_id": user._id.toString(),
    }

    let token_id;
    collection.insertOne(verificationToken)
    .then(result => {
      console.log("token result", result);
      token_id = result?.insertedId;
    })
    .catch(err => {
      console.log(err);
      return false;
    })

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
        <p>Please click <a href="http://localhost:3001/mongo/verifyEmail/${token_id}" target="_blank">this link</a> to verify your account</p>
      `, 
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return true;
  }

  async verifyUserFromEmail(client, token_id) {
    const tokenCollection = client.db("verificationTokens").collection("tokens");
    const userCollection = client.db("users").collection("users");

    const token = await tokenCollection.findOne({
      "_id": ObjectId(`${token_id}`)
    });

    let timeVerification = false;
    if(moment.utc(token.dataCreated).isBetween(moment().utc().subtract(15, 'minutes').unix(), moment.utc().unix())) {
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
      client.db('users').collection('users').updateOne(
        { "_id": user._id },
        {$set: { "isVerified": true } }
      ).then(result => {
        console.log("updated");
        return true;
      })
    }
    return false;

  }
}

module.exports = new userService;