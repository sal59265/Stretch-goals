const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodyPart = new Schema(
  {
    name: { type: String, required: true },
    symptom: { type: Array, required: true },
    reason: { type: String, required: true },
    instruction: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamp: true }
);

module.exports = mongoose.model('bodyPart', BodyPart);
