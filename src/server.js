//initialization of express
const express = require ('express');
const  app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json(),);

const mongodbPath = "mongodb+srv://vinaysingh82230:vin2025@cluster0.wrpuqpt.mongodb.net/notesdb";
    mongoose.connect(mongodbPath
).then(function(){

// app routes home route
app.get('/', function (req, res){
    const response = {message : 'API  Works!'};
    res.json(response);
});
const noteRouter = require('./routes/Note');
app.use('/notes', noteRouter);

});





// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,function (){ 
    console.log('server is running on PORT:'+ PORT);
});
