const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    name: String,
    phone: String,
    location: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;