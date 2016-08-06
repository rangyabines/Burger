/*
Inside the burgers_controller.js file, import the following:

express
method-override
body-parser
Create the router for the app, and export the router at the end of your file.
===============================================================================

Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	cat.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	cat.update({ sleepy: req.body.sleepy }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;