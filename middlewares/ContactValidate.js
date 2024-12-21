const { body } = require("express-validator");

const ContactValidate = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome e obrigatorio")
      .isLength({ min: 4 })
      .withMessage("O nome deve conter no minimo 4 Caracteres."),
    body("phone")
      .isString()
      .withMessage("O numero de contato e obrigatorio.")
      .isLength({ min: 9 })
      .withMessage("O numero deve conter no minimo 9 Caracteres.")
      .isLength({ max: 12 })
      .withMessage("O numero deve conter no maximo 12 Caracteres."),
    body("location")
      .optional()
      .isString()
      .withMessage("A localidade e obrigatoria."),
    body("description")
      .isString()
      .withMessage("A descrição do trabalho e obrigatoria.")
      .isLength({ min: 10 })
      .withMessage("A descrição do trabalho deve conter no minimo 10 Caracteres.")
      .isLength({ max: 120 })
      .withMessage("A descrição do trabalho deve conter no maximo 120 Caracteres."),
  ];
};

module.exports = {
  ContactValidate,
};
