const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctOption: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    required: true
  }
});

const QuizSchema = new mongoose.Schema({
  questions: {
    type: [QuestionSchema],
    required: true
  }
});

const QuestionModel = mongoose.model('questions', QuizSchema);
module.exports = QuestionModel
