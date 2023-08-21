const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/').get(getThoughts).post(createThought);

// /api/applications/:applicationId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
  
// /api/applications/:applicationId/tags
router.route('/:reactiontId/reaction').post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:reactionId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
