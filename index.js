var mongoose = require("mongoose")
var express = require("express")
var bodyParser = require('body-parser')
var hbs =require("hbs")

var app = express()

// set listen and view engine
app.set("port", process.env.PORT || 4001)
app.set("view engine", "hbs")

//print board pieces in index board
app.get("/", (req, res) => {
  let hello = "hey guys!"
  res.render("index", {
    hello: hello
  })
})

//listening for 4001
app.listen(app.get("port"), function(){
  console.log("listening")
})
