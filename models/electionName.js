const mongoose = require('mongoose'), Schema = mongoose.Schema;

var electionNameSchema = new Schema({
    election_id: { type: String, required: true , index: { unique: true }},
    election_name: { type: String, required: true },
    election_organizer: { type: String, required: true },
    election_password: { type: String, required: true }
});

module.exports = mongoose.model('electionlists', electionNameSchema)