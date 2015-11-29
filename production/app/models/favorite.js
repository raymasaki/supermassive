var mongoose     = require('mongoose');
var relationship = require("mongoose-relationship");


var favoriteSchema = mongoose.Schema({

    title            : String,
    created          : {
                      type: Date,
                      default: Date.now
                     },
    searchTerm       : String,
    url              : String,
    userId           : String,
    type             : String
});

module.exports = mongoose.model('Favorite', favoriteSchema);
