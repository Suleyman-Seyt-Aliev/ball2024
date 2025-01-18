var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница баскетбольного мяча*/
router.get('/basketball', function(req, res, next) {
  res.render('ball', {
  title: "Баскетбольный мяч",
  picture: "images/basketball.png",
  desc: "Предназначен для игры в баскетбол. Мяч должен иметь сферическую форму и быть установленного оттенка оранжевого цвета с традиционным рисунком из восьми вставок и черных швов."
  });
});

/* Страница футбольного мяча*/
router.get('/football', function(req, res, next) {
  res.render('ball', {
  title: "Футбольный мяч",
  picture: "images/football.png",
  desc: "Предназначен для игры в футбол. Обычно он состоит из нескольких панелей, сшитых или склеенных вместе, образующих его сферическую форму. Традиционно мячи изготавливались из кожи, но современные мячи чаще всего делают из синтетических материалов."
  });
});

/* Страница волейбольного мяча*/
router.get('/volleyball', function(req, res, next) {
  res.render('ball', {
  title: "Волейбольный мяч",
  picture: "images/volleyball.png",
  desc: "Предназначен для игры в волейбол. Состоит из панелей кожи (естественной или искусственной), натянутой вокруг каркаса. Каждая панель может состоять из трёх секций или рядов или может иметь другое строение."
  });
});
  
module.exports = router;
