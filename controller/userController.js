const { User, Thought } = require('../models');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const userData = await User.find({}, '-__v');
      // .populate({
      //   path: 'thoughts',
      // select: '_id'
      // });

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  getUserbyId: async ({ params }, res) => {
    try {
      const userData = await User.findOne({ _id: params.userId }, '-__v')
        .populate({ path: 'thoughts' })
        .populate({ path: 'friends' });
      // .populate({ path: 'friends', select: '-__v' });

      if (!userData)
        return res.status(404).json({ message: 'No user found with this id!' });

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  createUser: async ({ body }, res) => {
    try {
      console.log(body);
      const userData = await User.create(body);
      console.log('creating user', body);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  updateUser: async ({ params, body }, res) => {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: params.userId },
        body,
        { new: true }
      );
      if (!userData)
        return res.status(404).json({ message: 'No user found with this id!' });
      console.log('user data:', userData);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  deleteUser: async ({ params }, res) => {
    try {
      const userData = await User.findOneAndDelete({ _id: params.userId });
      if (!userData)
        return res.status(404).json({ message: 'No user found with this id!' });
      const thoughtData = await Thought.deleteMany({
        username: userData.username
      });
      console.log('thought data:', thoughtData);
      console.log('user data:', userData);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  addFriend: async ({ params }, res) => {
    try {
      const userData = await User.findOneAndUpdate({ _id: params.userId }), {$push: {}};
      if (!userData)
        return res.status(404).json({ message: 'No user found with this id!' });
     
      console.log('user data:', userData);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  
  }
};

module.exports = userController;
