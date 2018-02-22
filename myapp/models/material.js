var mongoose = require('mongoose');

var Material = new mongoose.Schema({
	id: String,
	name: String,
	description: String
	postedby:{
		type: mongoose.Schema.ObjectId,
		ref: 'Profile'
	}

});

module.exports = mongoose.model('Material', Material);



	