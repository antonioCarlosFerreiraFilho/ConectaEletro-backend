const { body } = require("express-validator");

// REGISTER
const registerValidate = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome de Usuario e obrigatorio")
      .isLength({ min: 4 })
      .withMessage("O nome de Usuario deve conter no minimo 4 Caracteres."),
    body("email")
      .isString()
      .withMessage("O email/gmail e obrigatorio.")
      .isEmail()
      .withMessage("Insira um email/gmail valido."),
    body("password")
      .isString()
      .withMessage("A senha e obrigatoria.")
      .isLength({ min: 6 })
      .withMessage("A senha deve conter um minimo 6 Caracteres."),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação da senha e obrigatoria.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas devem ser iguais.");
        }

        return true;
      }),
  ];
};

// LOGIN
const loginValidate = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email/gmail e obrigatorio.")
      .isEmail()
      .withMessage("Insira um email valido."),
    body("password").isString().withMessage("A senha e obrigatoria."),
  ];
};

// EDIT
const editValidate = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 4 })
      .withMessage("O nome de Usuario deve conter no minimo 4 Caracteres."),
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("A senha deve conter um minimo 6 Caracteres."),
  ];
};

module.exports = {
  registerValidate,
  loginValidate,
  editValidate,
};