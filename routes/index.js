var express = require('express');
var router = express.Router();

/* Load `index` page. Not the default home page in this application's case. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
