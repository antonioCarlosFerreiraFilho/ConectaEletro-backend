const NewSletter = require("../models/NewSletter");

// NEWSLETTER
const NewSletterPost = async (req, res) => {
  const { email } = req.body;

  try {
    const newSletter = await NewSletter.create({
      email,
    });

    if (!newSletter) {
      return res
        .status(422)
        .json({ errors: ["Erro ao enviar, tente novamente mais tarde."] });
    }

    return res.status(201).json(newSletter);
  } catch (err) {
    return res.status(422).json({
      errors: ["O Sistema Está Sendo Atualizado, Tente novamente mais tarde."],
    });
  }
};

module.exports = {

  NewSletterPost
}
