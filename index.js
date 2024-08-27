const { log } = require('console');
const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.send("This is a node application running in AWS EC2");
});
app.listen(3000, function(){
    console.log('The app listening on the port 3000!');
});