const { body } = require("express-validator");

// NEWSLETTER
const newSletterValidate = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email/gmail e obrigatorio.")
      .isEmail()
      .withMessage("Insira um email/gmail valido."),
  ];
};

module.exports = {

  newSletterValidate,
}