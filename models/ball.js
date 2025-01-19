var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ballSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Ball = mongoose.model("Ball", ballSchema)