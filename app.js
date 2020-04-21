//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")



const app = express();

var items = [];
const workItems = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get('/', function(req, res){

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options);


res.render("list", {listTitle: day, newListItems: items})


});

app.post('/', function(req, res){

  var item = req.body.newItem;

  items.push(item);

  res.redirect('/');
})

app.get("/work", function(req,res){

let day = date()

  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
  let items = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})


app.listen(3000, function(){
  console.log("Server on port 3000");
})
