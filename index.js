var express=require('express');
var app=express();
var port=3000;
var clientFiles='client';

app.use(express.static(clientFiles)); // load client files

app.set('views', './display');
app.set('view engine', 'pug');
app.get('/', function(req,res){
    res.render('index', {title:'Hey',message:'Hello there!'});
});
app.listen(port,function(){
    console.log('example app listening on port ${port}.');
});

// a. ----- install packages -----
// b. npm install
// c. ----- install client javascript ----- 
// d. sudo chmod 755 client/js/install.client.js.sh
// e. cd client/js
// f. ./install.client.js.sh
// g. ----- run application -----
// h. node index.js
// i. ----- check application -----
// j. http://localhost:3000
// k. ----- NOTE TAR GZ -----
// l. if using archive everything is set
// m. just extract and use node index.js

// TODO DONE git add client js
// TODO signup
// TODO login
// TODO me A
// TODO me/update-pass A
// TODO user/:id/like A
// TODO user/:id/unlike A
// TODO user/:id
// TODO most-liked
// TODO no sharing in urls
