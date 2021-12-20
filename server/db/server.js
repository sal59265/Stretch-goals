const express = require('express');
const routes = require('../routes/index');
const db = require('./index');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, 'client/build')));
  app.use('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
