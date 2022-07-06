const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://raushan2231:<password>@notes-manager.y3utn.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoUrl, () => {
        console.log("Connected to Mongo successfully......");
    })
}

module.exports = connectToMongo;
