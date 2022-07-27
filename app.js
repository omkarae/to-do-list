const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = [];
let workItems = [];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  let day = date.getDate();

  res.render("list", {listTitle: day, newItems: items});
})
app.post("/",function(req,res){

  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
    console.log(workItems);
  } else{
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newItems:workItems});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("Server started on port 3000");
});
