const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('./images'));
app.use(express.json());

app.use('/teams', teamsRouter);

module.exports = app;
