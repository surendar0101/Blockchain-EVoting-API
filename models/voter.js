const mongoose = require('mongoose'), Schema = mongoose.Schema;

const voterSchema = new Schema({
    id: { type: Number },
    username:{ type: String, required: true},
    password: { type: String, required: true}
});

module.exports = mongoose.model('voter', voterSchema);