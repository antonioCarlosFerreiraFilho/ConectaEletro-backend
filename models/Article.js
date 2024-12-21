const mongoose = require("mongoose");
const {Schema} = mongoose;

const ArticleSchema = new Schema(
  {
    data: String,
    title1: String,
    description1: String,
    images: Array,
    category: String,
    title2: String,
    title3: String,
    description2: String,
    title4: String,
    description3: String,
    description4: String,
    title5: String,
    description5: String,
    list1: String,
    list2: String,
    list3: String,
    list4: String,
    likes: Array,
    comments: Array,
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;