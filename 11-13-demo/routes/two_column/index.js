var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('two_column/float_margin', { title: 'Express' });
});

router.get('/float_margin', function(req, res, next) {
  res.render('two_column/float_margin', { title: 'Express' });
});

router.get('/position_margin', function(req, res, next) {
  res.render('two_column/position_margin', { title: 'Express' });
});

router.get('/float__margin', function(req, res, next) {
  res.render('two_column/float__margin', { title: 'Express' });
});

module.exports = router;
