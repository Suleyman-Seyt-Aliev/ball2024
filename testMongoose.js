const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Ball = require('./models/ball.js').Ball
var ball = new Ball({
title: "Баскетбольный мяч",
nick: "basketball",
})
ball.save();