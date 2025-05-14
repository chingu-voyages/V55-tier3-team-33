const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/', routes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
