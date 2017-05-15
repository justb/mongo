var express = require('express');
var router = express.Router();
var user = require('../model/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.insert();
  res.send('respond with a resource');
});

module.exports = router;
