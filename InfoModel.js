var mongoose = require('mongoose');
// Setup schema
var InfoSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    delivery: {
        type: String,
        required: true
    },
   Country:{
       type:String,
       required:true
   },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', InfoSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}