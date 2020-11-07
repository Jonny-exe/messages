var mongoose = require("mongoose");
console.log("creating scheme");
var PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        "default": Date.now
    }
});
console.log("Exporting POST");
module.exports = mongoose.model('Posts', PostSchema);
console.log("Exported");
