class userDataService {
  async InsertUserIntoDatabase(client, user) {

    console.log("db user", user)
    
    const collection = client.db("users").collection("users");

    const result = await collection.insertOne(user);

    return result.insertedCount
  }

  async FindUserByCredentials(client, credentials) {
    const collection = client.db("users").collection("users");

    const result = await collection.findOne({
      "username": credentials.username
    })

    if(result) {
      return result;
    }

  }
}

module.exports = new userDataService();