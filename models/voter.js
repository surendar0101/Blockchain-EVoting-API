const mongoose = require('mongoose'), Schema = mongoose.Schema;

const adminSchema = new Schema({
    electionId: { type: String, required: true },
    username:{ type: String, required: true},
    password: { type: String, required: true}
});

module.exports = mongoose.model('voter', adminSchema);