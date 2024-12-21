const { body } = require("express-validator");

const postArticleValidate = () => {
  return [
    body("data")
      .not()
      .equals()
      .withMessage("A data e obrigatoria.")
      .isString()
      .withMessage("A data e obrigatoria.")
      .isLength({ min: 4 })
      .withMessage("A data deve conter no minimo 4 caracteres."),
    body("title1")
      .not()
      .equals()
      .withMessage("O titulo1 e Obrigatorio.")
      .isString()
      .withMessage("O titulo1 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O titulo1 deve conter no minimo 4 caracteres."),
    body("description1")
      .not()
      .equals()
      .withMessage("A Descrição1 e Obrigatoria.")
      .isString()
      .withMessage("A Descrição1 e Obrigatoria.")
      .isLength({ min: 4 })
      .withMessage("A Descrição1 deve conter no minimo 4 caracteres."),
    body("category")
      .not()
      .equals()
      .withMessage("A Categoria e Obrigatoria.")
      .isString()
      .withMessage("A Categoria e Obrigatoria.")
      .isLength({ min: 4 })
      .withMessage("A Categoria deve conter no minimo 4 caracteres."),
    body("title2")
      .not()
      .equals()
      .withMessage("O titulo2 e Obrigatorio.")
      .isString()
      .withMessage("O titulo2 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O titulo2 deve conter no minimo 4 caracteres."),
    body("title3")
      .not()
      .equals()
      .withMessage("O titulo3 e Obrigatorio.")
      .isString()
      .withMessage("O titulo3 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O titulo3 deve conter no minimo 4 caracteres."),
    body("description2")
      .not()
      .equals()
      .withMessage("A description2 e Obrigatorio.")
      .isString()
      .withMessage("A description2 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("a description2 deve conter no minimo 4 caracteres."),
    body("title4")
      .not()
      .equals()
      .withMessage("O title4 e Obrigatorio.")
      .isString()
      .withMessage("O title4 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O title4 deve conter no minimo 4 caracteres."),
    body("description3")
      .not()
      .equals()
      .withMessage("O description3 e Obrigatorio.")
      .isString()
      .withMessage("O description3 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O description3 deve conter no minimo 4 caracteres."),
    body("description4")
      .not()
      .equals()
      .withMessage("O description4 e Obrigatorio.")
      .isString()
      .withMessage("O description4 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O description4 deve conter no minimo 4 caracteres."),
    body("title5")
      .not()
      .equals()
      .withMessage("O title5 e Obrigatorio.")
      .isString()
      .withMessage("O title5 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O title5 deve conter no minimo 4 caracteres."),
    body("description5")
      .not()
      .equals()
      .withMessage("O description5 e Obrigatorio.")
      .isString()
      .withMessage("O description5 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O description5 deve conter no minimo 4 caracteres."),
    body("list1")
      .not()
      .equals()
      .withMessage("O list1 e Obrigatorio.")
      .isString()
      .withMessage("O list1 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O list1 deve conter no minimo 4 caracteres."),
    body("list2")
      .not()
      .equals()
      .withMessage("O list2 e Obrigatorio.")
      .isString()
      .withMessage("O list2 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O list2 deve conter no minimo 4 caracteres."),
    body("list3")
      .not()
      .equals()
      .withMessage("O list3 e Obrigatorio.")
      .isString()
      .withMessage("O list3 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O list3 deve conter no minimo 4 caracteres."),
    body("list4")
      .not()
      .equals()
      .withMessage("O list4 e Obrigatorio.")
      .isString()
      .withMessage("O list4 e Obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O list4 deve conter no minimo 4 caracteres."),
  ];
};

const commentsValidade = () => {
  return [
    body("comments")
      .isString()
      .withMessage("o comentario e obrigatorio")
      .isLength({ min: 10 })
      .withMessage("o comentario Deve conter no minimo 10 caracteres.")
      .isLength({ max: 140 })
      .withMessage("o comentario Deve conter no maximo 140 caracteres."),
  ];
};

module.exports = {
  postArticleValidate,
  commentsValidade,
};
