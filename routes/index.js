var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about.html', function (req, res, next) {
    res.render('about', { title: 'About' });
})

router.get('/contact-me.html', function (req, res, next) {
    res.render('contact-me', { title: 'Contact Me' });
})

router.get('*', function(err, req, res, next) {
    res.sendFile('/public/404.html');
})

module.exports = router;
