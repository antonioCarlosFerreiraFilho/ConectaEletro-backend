const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewSletterSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const NewSletter = mongoose.model("NewSletter", NewSletterSchema);

module.exports = NewSletter;