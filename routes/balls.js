var express = require('express');
var router = express.Router();
var Ball = require('../models/ball').Ball;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с balls');
});

/* Страница машин */
router.get("/:nick", async function(req, res, next) {
    var balls = await Ball.find({nick: req.params.nick});
    console.log(balls)
    if(!balls.length) return next(new Error(" У нас нет информации об этом мяче! "))
    var ball = balls[0];
    res.render('ball', {
    title: ball.title,
    picture: ball.avatar,
    desc: ball.desc
    })
    });

module.exports = router;