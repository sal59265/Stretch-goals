const { isValidObjectId } = require('mongoose');
const db = require('../db/index');
const BodyPart = require('../models/bodyParts');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const bodyParts = [
    {
      name: 'Wrist',
      injuries: ['Carpal tunnel']
    },
    {
      name: 'Shoulder',
      injuries: ['Round shoulder']
    },
    {
      name: 'Knee',
      injuries: ['']
    },
    {
      name: 'Eye',
      injuries: ['Eyestrain or recurrent corneal erosion']
    },
    {
      name: 'Neck',
      injuries: ['Protracted neck']
    },
    {
      name: 'Back',
      injuries: ['Posterior cervical dorsal syndrome (Computer back)']
    },
    {
      name: 'Elbow',
      injuries: ['Tennis elbow']
    }
  ];

  await BodyPart.insertMany(bodyParts);
  console.log('Created some body parts from seed/bodyParts.js!');
};

const run = async () => {
  await main();
  db.close();
};

run();
