var mongoose = require('mongoose');

//creating schema

var profileSchema = mongoose.Schema({
	name: String,
	material: { type: mongoose.Schema.ObjectId, ref: 'Material' },
	college:String,
	course:String,
	semester:[String],
	contact:String,
	fb:String,
	colour:String
});

// var materialSchema = mongoose.Schema({
// 	name: String,
// 	description: String
// })
// var Material = module.exports = mongoose.model('Material', materialSchema);
var Profile = module.exports = mongoose.model('Profile', profileSchema);

module.exports.getProfiles = function( callback, limit) {
	Profile.find(callback).limit(limit);
}