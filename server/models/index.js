const mongoose = require('mongoose');
const Injury = require('.mongoose');

const BodyPart = mongoose.model('bodyPart');

module.exports = {
  BodyPart,
  Injury
};
