const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    data: {
      type: String
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Players", playerSchema);
