var db = require("./connection.js")
var models = require("./schema.js")

models.Game.create({name: "Seed game"}, (err, obj) => {
  err ? console.log(err) : console.log(obj);
})

models.Player.create({name: "Kevin"}, (err, obj) => {
  err ? console.log(err) : console.log(obj);
})

models.Player.create({name: "Alec"}, (err, obj) => {
  err ? console.log(err) : console.log(obj);
})
