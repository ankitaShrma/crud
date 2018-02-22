 var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

// /* GET home page. */
// var profileSchema = mongoose.Schema({
// 	name: String,
// 	material: [{ type: mongoose.Schema.ObjectId, ref: 'Material' }],
	
// });

// var materialSchema = mongoose.Schema({
// 	name: String,
// 	description: String
// })
// var Material = module.exports = mongoose.model('Material', materialSchema);
// var Profile = module.exports = mongoose.model('Profile', profileSchema);


var Profile = require('../models/profile');

var Material = require('../models/material');

	var mat1 = new Material({name: 'clay', description: "lplplp"});
	mat1.save(function(err){
		if (err) throw err;
		
		var person = new Profile({
			name: "hello",
			material: mat1._id
		});
		person.save(function(err){
			if (err) throw err;
			 Profile.findOne({name: "hello"}).populate('material', ['name']) // <-- only return the Persons name
.exec(function (err, profiless) {
  if (err) throw err;

  console.log('The person has %s', profiless);
  // prints "The creator is Aaron"
    })
		})
	})



router.get('/', function(req, res) {
	Profile.getProfiles(function(err, profiles){

		console.log('data......', profiles)
		if(err) throw err;

  res.render('index', { title: 'Hello', profiles });

});
});

router.get('/profile', function(req, res){
	Profile.getProfiles(function(err, profiles){

		console.log('data......', profiles[0])
		if(err) throw err;

	res.render('profile', { title: 'hey', profiles });
});
});


router.get('/add', function(req, res){
	

	res.render('add')
});
router.get('/material', function(req, res){
	

	res.render('material')
});
router.get('/lol', function(req, res){
	

	res.render('lol')
});
	


router.get('/edit/:id', function(req, res){

	Profile.findOne({_id: req.params.id}, function(err, profiles){
		
			res.render('edit', { title: 'yo', profiles});
			if(err) throw err;
	})		
});
	


module.exports = router;