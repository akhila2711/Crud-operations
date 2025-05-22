const db=require('mongodb')
const mongoClient=db.mongoClient

let database
const client=mongoClient.connect()