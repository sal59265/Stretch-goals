const { isValidObjectId } = require('mongoose');
const db = require('../db/index');
const Injury = require('../models/Injury');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const Injuries = [
    {
      name: 'Carpal tunnel syndrome',
      cause: [
        'Postioning of wrists while using a keyboard or mouse',
        'Any repeated movement that overextends your wrist'
      ],
      symptom: [
        'Numbness, tingling, and pain in your thumb and the first three fingers of your hand',
        'Pain and burning that travels up your arm',
        'Wrist pain at night that interferes with sleep',
        'Weakness in the muscles of the hand'
      ],
      diagnosis:
        'Press the backs of your hands and fingers together with your wrist flexed and your fingers pointed down for a minute. If your fingers tingle or get numb, you have capal tunnel syndrome.',
      instruction: [
        'Prayer Stretch: Start with your palms together in front of your chest, Slowly lower your hands toward your waistline and stop when you feel stretch. Hold for at least 30 seconds and repeat 3 times.',
        'Server Stretch: Extend your wrist and flex your arm so your palm is facing the ceiling. Rotate the base of palm away from your body and bring it back towards you slowly. Repeat it 5 times',
        'Wrist flexor and extensor: Extend your arm in front of you with your palms down. Bend your wrist, pointing toward the floor. With the other hand, gently bend your wrist until you feel a stretch. Do the same thing with extending your arm. Repeat 2 times.'
      ]
    }
  ];

  await Injury.insertMany(Injuries);
  console.log('Created some injuries from seed/injuries.js');
};

const run = async () => {
  await main();
  db.close();
};

run();
