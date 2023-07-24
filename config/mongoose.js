const mongoose=require('mongoose');
//config the mongodb the web app




mongoose.connect('mongodb://127.0.0.1/TODO');//making a database in the mongodb db with name TODO
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in conectin the mongoDB'));
db.once('open',function(){
    console.log("successfully conected to the mongodb");
})

module.exports=db;