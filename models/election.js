const mongoose = require('mongoose'), Schema = mongoose.Schema;

var electionSchema = new Schema({
    election_id: { type: String, required: true , index: { unique: true }},
    election_name: { type: String, required: true },
    candidates: { type: [{ name: { type: String, required: true } }] , required: true }
});

module.exports = mongoose.model('electionlist', electionSchema)