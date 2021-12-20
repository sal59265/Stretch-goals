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
        'Press the backs of your hands and fingers together with your wrist flexed and your fingers pointed down for a minute. If your fingers tingle or get numb, you have capal tunnel syndrome',
      instruction: [
        'Prayer Stretch: Start with your palms together in front of your chest, Slowly lower your hands toward your waistline and stop when you feel stretch. Hold for at least 30 seconds and repeat 3 times',
        'Server Stretch: Extend your wrist and flex your arm so your palm is facing the ceiling. Rotate the base of palm away from your body and bring it back towards you slowly. Repeat it 5 times',
        'Wrist flexor and extensor: Extend your arm in front of you with your palms down. Bend your wrist, pointing toward the floor. With the other hand, gently bend your wrist until you feel a stretch. Do the same thing with extending your arm. Repeat 2 times'
      ],
      bodypart: 'Wrist'
    },
    {
      name: 'Posterior cervical dorsal syndrome (Computer back)',
      case: [
        'Sitting with back bend forward and not sitting with a good ergonomics',
        'Impingement of nerves in T4',
        'Weakening of back muscle that stabilizes a spine'
      ],
      symptom: [
        'Diffused pain in arms',
        'Tingling and "pins-and-needles" sensation in whole arm or fore-arm',
        'Extreme hot or cold temperatures of hand',
        'Heavy feeling in the upper extremities'
      ],
      diagnosis:
        'If you feel tension on your back when you try to sit in a good ergonomics and have some of symptoms listed, you may have posterior cervical dorsal syndrome',
      instruction: [
        'sit at the edge of your chair with your feet farther aprat than your hips',
        'Turn your feet outward slightly',
        'Tuck your chin straight back slightly',
        'Breathe into your abdomen',
        'Actively exhale while extending your fingers and turning your palms outward also raising your breastbone slightly',
        'Repeat two or three times'
      ],
      bodypart: 'back'
    },
    {
      name: 'Eyestrain or recurrent corneal erosion',
      cause: [
        'This is not due to any underlying disease',
        'Prolonged exposure to bluelight',
        'Dryness of eyes from lack of sleep'
      ],
      symptom: [
        'Redness in eyes',
        'Sensitive to light',
        'Feels like there is something between eyes and eyelids',
        'Blurred vision',
        'Excessive tearing'
      ],
      diagnosis:
        'If you experience any of the following symptoms, you need to consult a doctor',
      instruction: [
        'Put in lubricant',
        'Use bandage lens',
        'Put antibitotics and steroid'
      ],
      bodypart: 'Eye'
    },
    {
      name: 'Round shoulder',
      cause: [
        'Using computer for a prolonged period with bad posture',
        'Bending over repeatedly',
        'Sitting for a long time'
      ],
      symptom: [
        'Causes a bad posture and will give a imbalance of a body and will eventually give back, neck, shoulder problems'
      ],
      diagnosis:
        'Look at your resting position while sitting down. If your shoulder is slouch when you are sitted and have your hands behind your head when you are standing up, you are most likely to have a protracted neck',
      instruction: [
        'Handclaps stretch: standing up straight with the hands by their sides, a person reaches their hands behind them to clasp them together. Gently, pull the shoulders back, while not allowing the neck to push forward',
        'T stretch: Lie flat on your back with your feet flat on the floor. Your knees will be bent and facing up. Arms should be extended out to the side of your body, palms facing up.'
      ],
      bodypart: 'Shoulder'
    },
    {
      name: 'Tennis elbow',
      cause: ['Repated movement of fingers when typing'],
      symptom: [
        'Tinkling sensation on the outer part of your elbow and sometimes in the forearm and wrist'
      ],
      diagnosis:
        'If you are doing a repeated movement on your fingers, you feel pain on the outside of elbow',
      instruction: [
        'Rest up and make sure your elbow is not inflammated',
        'Consult a doctor'
      ],
      bodypart: 'Elbow'
    },
    {
      name: 'Protracted neck',
      cause: [
        'Using computer for a prolonged period with bad posture',
        'Bending over repeatedly',
        'Sitting for a long time'
      ],
      symptom: [
        'Causes a bad posture and will give a imbalance of a body and will eventually give back, neck, shoulder problems'
      ],
      diagnosis:
        'Look at your resting position while sitting down. If your neck is slouch when you are sitted and have your hands behind your head when you are standing up, you are most likely to have a protracted neck',
      instruction: [
        'Handclaps stretch: standing up straight with the hands by their sides, a person reaches their hands behind them to clasp them together. Gently, pull the shoulders back, while not allowing the neck to push forward',
        'T stretch: Lie flat on your back with your feet flat on the floor. Your knees will be bent and facing up. Arms should be extended out to the side of your body, palms facing up.'
      ],
      bodypart: 'Neck'
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
