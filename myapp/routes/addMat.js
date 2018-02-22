var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Material = require('../models/profile');

router.post('/postMat', function(req, res){

	var material= new Material(req.body);
	material.save(function(err, doc){
		if (err) throw err
			res.redirect('/')
	});

})
module.exports = router;