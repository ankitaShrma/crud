var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/profile');

router.post('/edit/:id', function(req, res){

	
Profile.findByIdAndUpdate({_id:req.params.id},{
	name: req.body.name,
	college: req.body.college,
	semester: req.body.semester,
	course: req.body.course,
	contact: req.body.contact,
	
}, function(err, docs){
			 	if(err) throw err;
				else
				{ 
				   console.log(docs);
				   res.redirect('/');
				 }
			 });
// var profile= new Profile(req.body);
// 	profile.save(function(err, doc){
// 		if (err) throw err
// 			res.redirect('/')
// 	});
console.log('lolllllll');

})


module.exports = router;