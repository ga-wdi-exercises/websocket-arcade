var app = require("express")();
var http = require("http").Server(app);
var mongoose = require("mongoose");
var io = require("socket.io")(http);

mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
var Row = mongoose.model("Row", new mongoose.Schema({
  space0: "String",
  space1: "String",
  space2: "String"
}));

app.set("view engine", "hbs");

app.get("/", function(req, res){
  Row.find().lean().exec(function(err, rows){
    res.render("index", {rows: rows});
  });
});

io.on("connection", function(socket){

  socket.on("move", function(moveData){
    var coords = moveData[0].split("_"),
        newData = {},
        space;
    coords = {
      x: coords[0].substring(1),
      y: coords[1].substring(1)
    }
    space = "space" + coords.x;
    newData[space] = moveData[1];
    Row.update({_id: coords.y}, newData, function(doc){
    });
    io.emit("update", moveData);
  });

  socket.on("reset", function(){
    Row.collection.remove();
    for(x = 0; x < 3; x++){
      new Row({space0: "", space1: "", space2: ""}).save();
    }
    io.emit("reset");
  });

});

http.listen(3000);
