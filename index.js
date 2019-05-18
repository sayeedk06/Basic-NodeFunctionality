//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));// for getting values from forms
app.get("/",function(request,response){

  response.render('test', {foo: 'Mazing'});
});
// app.post("/",function(request,response){
//   console.log(request.body.test1);
//   response.send("It works maybe");
// });
app.get("/about", function(req,res){
  res.send("Hello this is Shaiban");
});
app.get("/contact", function(req,res){
  res.send("Coming soon");
});

app.listen(3000, function(){
  console.log("Server has started at port 3000");
});
