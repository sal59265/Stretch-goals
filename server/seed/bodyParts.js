const { isValidObjectId } = require('mongoose');
const db = require('../db/index');
const BodyPart = require('../models/bodyParts');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const bodyParts = [
    {
      name: 'Wrist',
      injuries: ['Carpal tunnel']
    }
  ];
};
