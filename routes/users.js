var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/permission', function(req, res, next) {
    res.send('respond with permissions');
});

module.exports = router;
