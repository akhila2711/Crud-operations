const db=require('mongodb')
const mongoClient=db.mongoClient

let database

async function getdataBase(){
    const client= await mongoClient.connect('mongodb://127.0.0.1:27017')
    database=client.db('library')

    if(!database){
        console.log("database not found")
    }
    return database
}
module.exports=getdataBase()
