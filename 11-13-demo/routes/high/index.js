var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('high/float_position', { title: 'Express' });
});

router.get('/float_margin_position', function(req, res, next) {
  res.render('high/float_margin_position', { title: 'Express' });
});

router.get('/float_position', function(req, res, next) {
  res.render('high/float_position', { title: 'Express' });
});

module.exports = router;
