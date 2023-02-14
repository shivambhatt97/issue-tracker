const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/issue_tracker');

const db =mongoose.connection;

db.on('error',console.error.bind('Error connection to mongo db'));
db.once('open',function(){
console.log('Connect to database :: MongoDB');
});