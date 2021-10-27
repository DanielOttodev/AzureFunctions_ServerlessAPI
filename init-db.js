const { MongoClient } = require("mongodb")
const { v4:uuidv4 } = require("uuid")

const url = 'YOURCONNECTIONSTRING'
const client = new MongoClient(url)



let mypeople = [
    {
        _id : uuidv4(),
        name: "Daniel",
        occupation: 'Azure Tutorials',
        hobbie: "sports"
    },
        {
        _id : uuidv4(),
        name: "John",
        occupation: 'Chiropractor',
        hobbie: "Cooking"
    },
        {
        _id : uuidv4(),
        name: "Sarah",
        occupation: 'Pilot',
        hobbie: "Music"
    },
        {
        _id : uuidv4(),
        name: "Dave",
        occupation: 'Coding',
        hobbie: "sports"
    },
    
    
]


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("Town")
    const collection = database.collection("People")
    await collection.deleteMany({})
    await collection.insertMany(mypeople);
    
        context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Init is done"
    };
}
