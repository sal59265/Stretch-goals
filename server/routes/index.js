const { Router, response } = require('express');
const controllers = require('../controllers/index');
const router = Router();

router.get('/', (request, response) => response.send('Keep at it!'));

router.get('/parts', controllers.getAllBodyPart);

router.get('/injuries', controllers.getAllInjury);

router.get('/parts/:id', controllers.getBodyPartById);

router.get('/injuries/:id', controllers.getInjuryById);

router.post('/injuries', controllers.createInjury);

router.post('/parts', controllers.createPart);

router.put('/injuries:id', controllers.updateInjury);

router.put('/parts:id', controllers.updatePart);

router.delete('/injuries:id', controllers.deleteInjury);

router.delete('parts:id', controllers.deletePart);

module.exports = router;
