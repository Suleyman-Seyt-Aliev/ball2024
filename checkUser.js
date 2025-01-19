var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/ball2024")
var User = require("./models/user.js").User
var first_user = new User({
username: "Tolik",
password: "qwerty"
})
first_user.save();