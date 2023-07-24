const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
const bodyparser=require('body-parser');//middleware for extracting the data of req.body
app.use(bodyparser.urlencoded({ extended: false }))

app.use(expressLayouts);
app.set('layout extractStyles',true);//setting the where css file should be refer in the layout page
app.set('layout extractScripts',true)//setting the where should script tag refer in the layout page 
app.use(express.static('./assets'));//setting the default directory for the static file
app.use('/',require('./route/index'))//we are telling the server to use this route which is present in the route/index.js for any request after localhost300  
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log("====error in starting the server=======");
    }
    console.log('****server is started on port****',port);

})