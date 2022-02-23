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
      const thoughtData = await Thought.findOne({ _id: params.id });
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
  updateThought: async ({ params, body }, res) => {},
  deleteThgouht: async ({ params }, res) => {}
};

module.exports = thoughtController;
