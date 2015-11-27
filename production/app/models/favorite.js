var mongoose     = require('mongoose');
var relationship = require("mongoose-relationship");


var favoriteSchema = mongoose.Schema({

    user             : { type: mongoose.Schema.ObjectId, ref: 'User', childPath: 'favorites' },
    title            : String,
    created          : {
                      type: Date,
                      default: Date.now
                     },
    searchTerm       : String,
    url              : String

});

module.exports = mongoose.model('Favorite', favoriteSchema);
