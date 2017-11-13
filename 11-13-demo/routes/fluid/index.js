var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fluid/float', { title: 'Express' });
});

router.get('/float', function(req, res, next) {
  res.render('fluid/float', { title: 'Express' });
});

router.get('/position', function(req, res, next) {
  res.render('fluid/position', { title: 'Express' });
});

module.exports = router;
