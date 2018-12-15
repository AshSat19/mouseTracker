// Description: Entry point for the APIs
// Author: AshwinSathian

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/dev.json');

const mouseDataRoute = require('./routes/mouseData');

const app = express();

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database Connection
mongoose.connect(config.db.connString, { useNewUrlParser: true })
.then(() => {
  console.log('Database Connection Successful');
})
.catch((err) => {
  console.log('Database Connection Failed');
});

// Admin Authentication Route
app.use('/api/mouseData', mouseDataRoute);

const server = app.listen(process.env.PORT || 3000);