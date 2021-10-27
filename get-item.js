const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const url = 'YOURCONNECTIONSTRING'
const client = new MongoClient(url);

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db("Town")
  const collection = database.collection("People")

  let person = await collection.findOne({ _id : req.params.id })
  
  if (!person){
      return context.res = {
          status:400,
          body: "Couldnt find that person"
      }
  }
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: person
    });
};
