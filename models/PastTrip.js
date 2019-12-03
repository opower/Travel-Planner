const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PastTripSchema = new Schema({
    location:{type:String, required:true, max:30},
    date:{type:String, required:true},
    duration:{type:String}
});

const PastTrip = mongoose.model("PastTrip", PastTripSchema);

module.exports = PastTrip;
