const express = require('express');
const cors = require('cors');
const Admin = require('./models/admin')
const Voter = require('./models/voter')
const md5 = require('md5');
require('./db/mongoose');

const app = express();
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', function(req, res) {
    res.json('Welcome to E-Voting... Driven by Blockchain Technology...');
});

// Admin APIs
app.post('/api/admin/login', async (req, res) => {
    const adminFound = await Admin.findOne({
        username: req.body.username,
        password: md5(req.body.password),
    });
    (adminFound) ? res.send(true) : res.send(false);
});

app.post('/api/admin', async (req, res) => {
    const newAdmin = new Admin({
        username: req.body.username,
        password: md5(req.body.password)
    });
    newAdmin.save((error, doc) => {
        if (!error) {
            const successMessage = `The admin user '${doc.username}' has been created Successfully`;
            console.log(successMessage)
            return res.json({ message: successMessage });
        }
        console.error(`Error while creating the admin user: ${error}`)
        return res.status(500).json({
            message: `Error while creating the admin user. ${error.message}`,
            error: error
        });
    });
});

// Voter APIs

app.post('/api/voter/login', async (req, res) => {
    const voterFound = await Voter.findOne({
        username: req.body.username,
        password: md5(req.body.password),
    });
    (voterFound) ? res.send(true) : res.send(false);
});

app.post('/api/voter', async (req, res) => {
    const newVoter = new Voter({
        username: req.body.username,
        password: md5(req.body.password),
        electionId: req.body.electionId
    });
    newVoter.save((error, doc) => {
        if (!error) {
            const successMessage = `The voter user '${doc.username}' has been created Successfully`;
            console.log(successMessage)
            return res.json({ message: successMessage });
        }
        console.error(`Error while creating the voter: ${error}`)
        return res.status(500).json({
            message: `Error while creating the voter. ${error.message}`,
            error: error
        });
    });
});

const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});