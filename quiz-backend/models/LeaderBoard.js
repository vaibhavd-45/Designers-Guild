const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
