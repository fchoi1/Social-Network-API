const router = require('express').Router();
const thoughtController = require('../../controller/thoughtController');

// /api/thoughts
router
  .route('/')
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);
//.post(thoughtController.createThought);

router.route('/:thoughtId');

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions');

module.exports = router;
