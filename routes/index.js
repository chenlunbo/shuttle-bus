var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var isFromMobile = !!(req.get('User-Agent').match(/iPhone|iPad|iPod|Android/i));
  res.render('./home/index', { title: 'Express',  isFromMobile: isFromMobile});
});

router.get('/about', function(req, res, next) {
  var isFromMobile = !!(req.get('User-Agent').match(/iPhone|iPad|iPod|Android/i));
  res.render('./home/about', { title: 'Express',  isFromMobile: isFromMobile});
});

module.exports = router;
