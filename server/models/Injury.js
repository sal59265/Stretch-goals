const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Injury = new Schema(
  {
    name: { type: String, required: true },
    cause: { type: String, required: true },
    symptom: { type: Array, required: true }
  },
  { timestamp: true }
);

module.exports = mongoose.model('injury', Injury);
