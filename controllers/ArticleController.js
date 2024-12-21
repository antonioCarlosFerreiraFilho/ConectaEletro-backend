const Article = require("../models/Article");
const User = require("../models/User");

// POST
const postArticle = async (req, res) => {
  const images = req.files;

  try {
    const {
      data,
      title1,
      description1,
      category,
      title2,
      title3,
      description2,
      title4,
      description3,
      description4,
      title5,
      description5,
      list1,
      list2,
      list3,
      list4,
    } = req.body;

    if (images.length === 0 || images.length > 5) {
      return res.status(422).json({ errors: ["Upload max: 5"] });
    }

    //CREATE ARTICLE
    const newArticle = await Article.create({
      data,
      title1,
      description1,
      images: [],
      category,
      title2,
      title3,
      description2,
      title4,
      description3,
      description4,
      title5,
      description5,
      list1,
      list2,
      list3,
      list4,
    });

    images.map((img) => {
      newArticle.images.push(img.filename);
    });

    const saveDB = await newArticle.save();

    return res.status(201).json(saveDB);
  } catch (err) {
    return res.status(422).json({ errors: ["Erro ao Postar."] });
  }
};

// Show Article
const showArticle = async (req, res) => {
  const AllArticle = await Article.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(AllArticle);
};

// get Article
const getArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const ArticleDB = await Article.findById(id);

    if (!ArticleDB) {
      return res.status(422).json({ errors: ["Artigo não encontrado."] });
    }

    res.status(201).json(ArticleDB);
  } catch (err) {
    return res.status(422).json({ errors: ["Artigo não encontrado."] });
  }
};

// comments Article
const commentsArticle = async (req, res) => {
  const { id } = req.params;
  const { comments } = req.body;

  const reqUser = req.user;

  const UserCurrent = await User.findById(reqUser._id);
  const ArticleDB = await Article.findById(id);

  if (!ArticleDB) {
    return res.status(404).json({ error: ["POST não encontrada."] });
  }

  const newComments = {
    comments,
    userName: UserCurrent.name,
    userImage: UserCurrent.imageProfile,
    userId: UserCurrent._id,
  };

  await ArticleDB.comments.push(newComments);

  await ArticleDB.save();

  res.status(200).json({
    comments: newComments,
    message: "comentario Publicado",
  });
};

// Search Article
const searchArticle = async (req, res) => {
  const { q } = req.query;

  const SearchArticle = await Article.find({
    title1: new RegExp(q, "i"),
  }).exec();

  res.status(200).json(SearchArticle);
};

// Search Article Category
const searchArticleCategory = async (req, res) => {
  const { q } = req.query;

  const SearchArticle = await Article.find({
    category: new RegExp(q, "i"),
  }).exec();

  res.status(200).json(SearchArticle);
};

module.exports = {
  postArticle,
  showArticle,
  getArticle,
  commentsArticle,
  searchArticle,
  searchArticleCategory,
};
