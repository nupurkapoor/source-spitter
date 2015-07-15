/* Define requirements and dependencies */
var express = require('express'),
	bodyParser = require('body-parser'),
	request = require("request"), 
	jquery = require('jquery'),
	router = express.Router(),
	contentBody = '',
	errorBody = '';

/* Router specific configurations */
router.use(bodyParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* POST function to enable request module to get data, pass relevant content.*/
router.post('/', function (req, res) {  
  var fetchURL = req.body.url;

  	request({ uri: decodeURIComponent(fetchURL)}, function (error, response, body) {

	    if (!error) {
			contentBody = body;
			res.send(contentBody);
	        
	    } else {
	    	errorBody = error.status;
	        errorBody = 'Oops. Could not complete request. ' + error.hostname + ' ' + error.errno;
	        console.log(errorBody);
	        res.send(errorBody);
	    }
	});
});

/* Loads `scrape` page. The default home page in this application's case. */
router.get('/', function(req, res, next) {
  res.render('scrape', {title: 'Source Spitter', content: contentBody, error: errorBody});
});

module.exports = router;
