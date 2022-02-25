const router = require('express').Router();
const TC = require('../../controller/thoughtController');

// /api/thoughts
router.route('/').get(TC.getAllThoughts).post(TC.createThought);
//.post(TC.createThought);

router
  .route('/:thoughtId')
  .get(TC.getThoughtbyId)
  .put(TC.updateThought)
  .delete(TC.deleteThought);

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(TC.addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(TC.deleteReaction);
module.exports = router;
