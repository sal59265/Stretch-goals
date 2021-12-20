const { Router, response } = require('express');
const controllers = require('../controllers/index');
const router = Router();

router.get('/', (request, response) => response.send('Keep at it!'));

router.get('/parts', controllers.getAllBodyPart);

router.get('/injuries', controllers.getAllInjury);

router.get('/parts/:id', controllers.getBodyPartById);

router.get('/injuries/:id', controllers.getInjuryById);

module.exports = router;
