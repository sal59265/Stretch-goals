const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Injury = new Schema(
  {
    name: { type: String, required: true },
    cause: { type: Array, required: true },
    symptom: { type: Array, required: true },
    diagnosis: { type: String, required: true },
    instruction: { type: Array, required: true }
  },
  { timestamp: true }
);

module.exports = mongoose.model('injury', Injury);
