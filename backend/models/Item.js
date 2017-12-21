var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = Schema({
	name: {type: String},
	price: {type: String}
});

module.exports = mongoose.model('Item', Item);