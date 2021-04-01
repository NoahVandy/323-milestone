const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const moment = require('moment');
const userService = require('./services/business/userService');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'root',
//   database: '323-milestone'
// })

const uri = "mongodb+srv://NoahVandy:kfKCNwA9FLyh1XN7@collegetradedb.eriyx.mongodb.net/CollegeTradeDB?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.json());

MongoClient.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
  if(err) {
    console.log(err);
    return;
  }

  app.post('/bcrypt', (req, res) => {
    

    const compare = () => {
      bcrypt.compare("$2b$10$iM/OhkQoKTrEm37E7c3LjuhocbD/bXoFbWs34ozda9S8Cj/zsrUSK", "$2b$10$iM/OhkQoKTrEm37E7c3LjuhocbD/bXoFbWs34ozda9S8Cj/zsrUSK")
      .then(results => {
        console.log(results);
      })
    }

    compare();

    
  })

  app.post('/mongo/loginUserByCredentials', (req, res) => {
    const credentials = {
      ...req.body,
    }

    const loginUser = async () => {
      userService.LoginUser(client, credentials)
      .then(payload => {
        if(payload.status === true) {
          return res.status(200).send(payload);
        }
        else {
          return res.status(500).send("fail")
        }
      })
    }

    loginUser();

  })

  app.post('/monogo/createNewUser', (req, res) => {
    const user = {
      ...req.body,
    }

    const returnFlag = async () => {
      userService.CreateNewUser(client, user)
      .then(flag => {
        if(flag.status === true) {
          return res.status(200).send(flag);
        }
        else {
          return res.status(500).send("fail");
        }
      })
    }
    returnFlag();
  })

  app.get('/mongo/verifyEmail/:token_id', (req, res) => {
    const token_id = req.params.token_id;
    const returnFlag = async () => {
      userService.verifyUserFromEmail(client, token_id)
      .then(flag => {
        if(flag === true) {
          return res.status(200).send("OK");
        }
        else {
          return res.status(500).send("fail");
        }
      })
    } 

    returnFlag();
  })
})

app.get('/', (req, res) => {
  res.send("hello Noah");
  console.log("has been clicked");
});

app.listen(3002, () => {
  console.log("running on port 3002");
});

