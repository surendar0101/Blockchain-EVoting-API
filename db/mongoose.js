const mongoose = require('mongoose')

// Mongo DB connection
const mongoDBUri = "mongodb+srv://surendar:12345@cluster0.sqkey.mongodb.net/BlockchainDB?retryWrites=true&w=majority";
mongoose.connect(mongoDBUri, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});