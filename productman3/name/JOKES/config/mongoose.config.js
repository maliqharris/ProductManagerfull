const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbName = "destdb"

const uri = `mongodb+srv://maliqjaidenharris:${pw}@cluster0.g54hyq8.mongodb.net/${dbName}?retryWrites=true&w=majority`




mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then (() => console.log("Established a connection to the database" ))
    .catch(err => console.log("Something went wrong when connecting to the database", err));