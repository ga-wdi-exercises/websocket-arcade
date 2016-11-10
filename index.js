var mongoose = require("mongoose")
var express = require("express")
var bodyParser = require('body-parser')
var hbs =require("hbs")

var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

// set listen and view engine
app.set("port", process.env.PORT || 4001)
// app.set("view engine", "hbs")

//print board pieces in index board
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on("connection", function(socket) {
  socket.on("add piece", function(piece) {
    io.emit("add piece", piece)
  })
})

//listening for 4001
http.listen(app.get("port"), function(){
  console.log("listening on " + app.get("port"))
})
