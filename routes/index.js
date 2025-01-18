var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница баскетбольного мяча*/
router.get('/basketball', function(req, res, next) {
  res.send("<h1>Страница баскетбольного мяча</h1>")
  });
  /* Страница футбольного мяча*/
router.get('/football', function(req, res, next) {
  res.send("<h1>Страница футбольного мяча</h1>")
  });
  /* Страница волейбольного мяча*/
router.get('/volleyball', function(req, res, next) {
  res.send("<h1>Страница волейбольного мяча</h1>")
  });
  
module.exports = router;
