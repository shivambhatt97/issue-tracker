require('dotenv').config()
const express= require('express');

const db= require('./config/mongoose');
const app=express();
const port=8000;


const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and script from the sub pages
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);

//view engine set up
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);

    }
    console.log(`Server is running on port ${port}`);
});