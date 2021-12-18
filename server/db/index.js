const mongoose = require('mongoose');
const uri =
  'mongodb+srv://sal59265:sal59265@mycluster.iln34.mongodb.net/StretchProject?retryWrites=true&w=majority';

mongoose
  .connect(uri, { userNewUrlParse: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB through db/index.js.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });
mongoose.set('debug', true);
const db = mongoose.connection;

module.exports = db;
