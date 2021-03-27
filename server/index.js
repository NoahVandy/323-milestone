const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const moment = require('moment');
const userService = require('./services/userService');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'root',
//   database: '323-milestone'
// })

const uri = "mongodb+srv://NoahVandy:kfKCNwA9FLyh1XN7@collegetradedb.eriyx.mongodb.net/CollegeTradeDB?retryWrites=true&w=majority";


MongoClient.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected');
  const db = client.db('test');

  app.get('/mongotestfind', (req, res) => {
    db.collection('devices').find().toArray()
    .then(results => {
      console.log(results);
      res.status(200).send(results);
    }).catch(err => {
      console.log(err);
      res.status(500).send(err);
      client.close();
      return;
    });
  })

  app.get('/mongotestfindone/:userId', (req, res) => {

    const userId = req.params.userId;
    console.log(userId.toString())

    const query = {
      "_id": ObjectId(`${userId}`)
    }

    db.collection('devices').findOne(query)
    .then(results => {
      console.log(results);
      res.status(200).send(results);
    }).catch(err => {
      console.log(err);
      res.status(500).send(err);
      return;
    });
  })

  app.post('/monogo/createNewUser', (req, res) => {
    const collection = client.db("users").collection("users");
    const user = {
      ...req.body,
      "isDeleted": false,
      "securityLevel": 1,
      "role": "user",
      "isVerified": false,
      "dataCreated": moment.utc().unix(),
    }

    collection.insertOne(user)
    .then(result => {
      if(result.insertedCount === 1) {
        console.log(result);
        const flag = userService.SendVerificationEmail(client, result.ops[0]);
        if(flag) {
          res.status(200).send(result);
        }
        else {
          res.status(500).send(result);
        }
      }
      else {
        console.log(err);
        res.status(500).send(result);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
      return;
    })

  })

  app.get('/mongo/verifyEmail/:token_id', (req, res) => {
    const token_id = req.params.token_id;
    const flag = userService.verifyUserFromEmail(client, token_id);

    if(flag === false) {
      res.status(200).send("verified");
    }else {
      res.status(500).send("not verified");
    }
  })

  app.post('/mongotest', (req, res) => {
    const collection = client.db("test").collection("devices");
    
    collection.insertOne(req.body)
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
      return;
    })
  })
})

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello Noah");
  console.log("has been clicked");
});

app.get('gettestmongo', (req, res) => {

})

/**
 * Inserting a user through a post method
 */
app.post('/api/createUser', (req, res) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const gradeLevel = req.body.gradeLevel;
  const birthday = req.body.birthday;

  const sqlInsertUsers = `INSERT INTO users 
  (
    id, 
    firstName, 
    lastName, 
    username, 
    password, 
    email,
    gradeLevel, 
    birthday
  ) VALUES (
    null, 
    '${firstName}', 
    '${lastName}', 
    '${username}', 
    '${password}',
    '${email}',
    '${gradeLevel}',
    '${birthday}'
  );`;

  const sqlInsertCredentials = `INSERT INTO credentials
  (
    username,
    password
  ) VALUES (
    '${username}',
    '${password}'
  );`;

  connection.beginTransaction((err) => {
    if (err) {
      throw err
    }
    connection.query(sqlInsertUsers, (err, result) => {
      if (err) {
        connection.rollback(() => {
          console.error(err);
          throw err;
        })
      }
      if(result) {
        connection.query(sqlInsertCredentials, (err, result) => {
          if(err) {
            connection.rollback(() => {
              console.error(err);
            throw err;
            });
          }
          console.log(result);
        })
      }
      connection.commit((err) => {
        if(err) {
          connection.rollback(() => {
            console.error(err);
            throw err;
          })
        }
      })
      console.log(result);
      res.send(result);
    });
  })
  
});

/**
 * deleting an existing user through a post method
 */
app.post('/api/delete', (req, res) => {

  const id = req.body.id;
  console.log("deleting the user with an id of: " + id)

  const sqlInsert = `DELETE from users WHERE id = ${id};`;
  connection.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
});

/**
 * gets an exisitng user through a url parameter from a get method 
 */
app.get('/api/getUser/:userId', (req, res) => {

  const userId = req.params.userId;

  const sql = `SELECT * from users where id = ${userId};`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
})

app.get('/api/getItem/:itemId', async (req, res) => {

  const itemId = req.params.itemId;

  const sql = `SELECT * from items where id = ${itemId};`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
})

/**
 * gets an exisitng user through a url parameter from a get method 
 */
app.post('/api/getUserByCredentials', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  const sql = `SELECT * from users where username = '${username}' AND password = '${password}';`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
})

/**
 * updates an exisitng user from a post method
 */
app.post('http://localhost:3001/api/editUser', (req, res) => {

  const id = req.body.userId;
  const username = req.body.username;
  const email = req.body.email;
  const gradeLevel = req.body.gradeLevel;
  const birthday = req.body.birthday;


  const sqlInsert = `UPDATE users set username = '${username}', email = '${email}', gradeLevel = '${gradeLevel}', birthday = '${birthday}' where id = ${id};`;
  connection.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
});

/**
 * gets all users from a database
 */
app.get('/api/getItems', (req, res) => {
  const sql = `SELECT * from items;`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
})

app.post('/api/createItem', (req, res) => {

  const title = req.body.title;
  const desc = req.body.desc;
  const price = req.body.price;
  const userId = req.body.userId;


  const sqlInsert = `INSERT INTO items
    VALUES (
      null, 
      '${title}', 
      '${desc}', 
      ${userId}, 
      '${price}'
      );`;
  connection.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

