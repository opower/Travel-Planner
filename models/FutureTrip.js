const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FutureTripSchema = new Schema({
    location:{type:String, required:true, max:30},
    date:{type:String, required:true},
    duration:{type:String}
});

const FutureTrip = mongoose.model("FutureTrip", FutureTripSchema);

module.exports = FutureTrip;
