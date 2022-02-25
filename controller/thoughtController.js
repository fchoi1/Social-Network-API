const { Thought, User } = require('../models');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughtData = await Thought.find({});
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  getThoughtbyId: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOne({ _id: params.thoughtId });
      if (!thoughtData)
        return res
          .status(404)
          .json({ message: 'No thought found with this id!' });
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  createThought: async ({ body }, res) => {
    try {
      const thoughtData = await Thought.create(body);
      const userData = await User.findOneAndUpdate(
        { username: thoughtData.username },
        { $push: { thoughts: thoughtData._id } },
        { new: true }
      );
      console.log('creating thought', thoughtData);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  updateThought: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        body,
        { new: true }
      );
      console.log('updated thought', thoughtData);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  deleteThought: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: params.thoughtId
      });
      console.log('deleted thought', thoughtData);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  addReaction: async ({ params, body }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true }
      );
      if (!thoughtData)
        return res
          .status(404)
          .json({ message: 'No thought found with this id!' });
      console.log('creating reaction', thoughtData);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  deleteReaction: async ({ params }, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      );
      if (!thoughtData)
        return res
          .status(404)
          .json({ message: 'No thought found with this id!' });

      console.log('removing reaction', thoughtData);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
};

module.exports = thoughtController;
