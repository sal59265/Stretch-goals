const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodyPart = new Schema(
  {
    name: { type: String, required: true },
    injuries: { type: Array, required: true }
  },
  { timestamp: true }
);

module.exports = mongoose.model('bodyPart', BodyPart);
