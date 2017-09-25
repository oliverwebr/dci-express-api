const mongoose = require('mongoose');
const Comment = require('../models/Comment.js');

exports.showComments = (req, res) => {
  res.json({ message: "its working"})
}

exports.addComment = async (req, res) => {
  const comment = req.body.comment
  const comt = await new Comment({ comment }).save()

  res.json({ comment })
}
