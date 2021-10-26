const express = require('express');
const cors = require('cors');
const Election = require('./models/electionName');
const Admin = require('./models/admin')
const md5 = require('md5');
const underscore = require('underscore')
require('./db/mongoose');

const app = express();
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', function(req, res) {
    res.json('Welcome to E-Voting... Driven by Blockchain Technology...');
});

function getFormatedElectionList(election) {
    return {
        'election_id': election.election_id,
        'election_organizer': election.election_organizer,
        'election_name': election.election_name
    }
}

async function getElectionId() {
    const electionListCount = await Election.find();
    return `ELECTION_NO_${electionListCount.length + 1}`;
}

app.get('/api/electionName', async (req, res) => {
    const electionList = await Election.find();
    const modifiedList = underscore.map(electionList, election => getFormatedElectionList(election));
    res.send(modifiedList);
});

app.post('/api/electionName', async (req, res) => {
    const electionId = await getElectionId();
    const newElection = new Election({
        election_id: electionId,
        election_name: req.body.election_name,
        election_organizer: req.body.election_organizer,
        election_password: md5(req.body.election_password),
    });
    newElection.save((error, doc) => {
        if (!error) {
            console.log(`Election created Successfully`)
            return res.json(getFormatedElectionList(doc))
        }
        console.error(`Error while creating the election: ${error}`)
        return res.status(500).json({
            message: `Error while creating the Election`,
            error: error
        });
    });
});

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

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});