const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ehbs = require('express-handlebars')
const dbo = require('./db')
const { ObjectId } = require('mongodb')

app.engine('hbs', ehbs.engine({ layoutsDir: 'views', defaultLayout: "main", extname: "hbs" }))
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    let database = await dbo.getdataBase();
    const collection = database.collection("books");
    const cursor = collection.find({});
    let library = await cursor.toArray();
    let message = " ";
    res.render('main.hbs', { message, library });
});

app.post('/store-book', async (req, res) => {
    let database = await dbo.getdataBase();
    const collection = database.collection("books");
    let book = { title: req.body.title, author: req.body.author }
    await collection.insertOne(book)
    return res.redirect('/?status=1')
})

// Update book route
app.post('/update-book', async (req, res) => {
    let database = await dbo.getdataBase();
    const collection = database.collection("books");
    const bookId = req.body.id;
    const updatedBook = {
        title: req.body.title,
        author: req.body.author
    };
    await collection.updateOne(
        { _id: new ObjectId(bookId) },
        { $set: updatedBook }
    );
    return res.redirect('/?status=2')
})

app.listen(8000, () => {
    console.log("listening to port 8000")
})
