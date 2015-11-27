var mongoose = require('mongoose');

// search Schema setup
var searchSchema = mongoose.Schema({
  word: String,
  count: Number
});

/*searchSchema.methods.upsert = function() {
  var search = this;
  search.findOneAndUpdata({$inc: {count.7}})
}*/

// Create the model fo Search using the searchSchema and use it in app
module.exports = mongoose.model('Search', searchSchema);
