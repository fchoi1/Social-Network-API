const router = require('express').Router();
const UC = require('../../controller/userController');

// /api/user
router.route('/').get(UC.getAllUsers).post(UC.createUser);

router
  .route('/:userId')
  .get(UC.getUserbyId)
  .delete(UC.deleteUser)
  .put(UC.updateUser);

// /api/users/:userId/friends/:friendId add friend

router
  .route('/:userId/friends/:friendId')
  .post(UC.addFriend)
  .delete(UC.deleteFriend);

module.exports = router;
