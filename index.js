//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
items = [];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));// for getting values from forms
app.use(express.static("public"));


app.get("/",function(request,response){

  let today = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDay = today.toLocaleDateString("en-US",options);
  response.render('test', {foo: currentDay,listItem: items});
});

app.post("/",function(req,res){
  items.push(req.body.addItem);
  res.redirect('/');
});
app.get("/about", function(req,res){
  res.send("Hello this is Shaiban");
});
app.get("/contact", function(req,res){
  res.send("Coming soon");
});

app.listen(3000, function(){
  console.log("Server has started at port 3000");
});
