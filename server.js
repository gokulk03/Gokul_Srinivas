const express=require("express");
const bodyParser = require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req , res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1/(n2*n2);
  res.send("The BMI number is : "+result);

});

app.get("/about",function(req , res){
  res.sendFile("<h1>K Gokul Srinivas </h1><p>this is me and I am about to start an internship programme at SHAPE AI</p>");
});

app.get("/skills",function(req , res){
  res.sendFile("<h3>Never let you down!</h3><p>All skills are perfected through the process of failure. ...</p>");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
