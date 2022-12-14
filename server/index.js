const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 5000;

const db = require('./db/database');

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

routes(app);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))