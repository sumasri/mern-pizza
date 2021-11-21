//connecting application to database

const mongoose = require('mongoose');

var mongoUrl='mongodb+srv://SumasriChitturi:<password>@cluster0.ubbfx.mongodb.net/mern-pizza'

mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('MongoDb Connection Successful');
})

db.on('error',()=>{
    console.log('MongoDb Connection Failed');
})

module.exports=mongoose
