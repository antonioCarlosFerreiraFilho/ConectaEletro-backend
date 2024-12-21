const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");

const authUserToken = (id) => {
  return jwt.sign({ id }, jwt_secret, {
    expiresIn: "7d",
  });
};

//REGISTER
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userAlreadyRegister = await User.findOne({ email });

  if (userAlreadyRegister) {
    return res
      .status(422)
      .json({ errors: ["Este usuario ja se encontra cadastrado."] });
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  if (!newUser) {
    return res.status(422).json({ errors: ["Erro ao cadastrar."] });
  }

  return res.status(200).json({
    msg: "Usuario Cadastrado.",
    _id: newUser._id,
    token: authUserToken(newUser._id),
  });
};

//LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (!userExist) {
    return res
      .status(422)
      .json({ errors: ["Este email não se encontra cadastrado."] });
  }

  if (!(await bcrypt.compare(password, userExist.password))) {
    return res.status(422).json({ errors: ["Senha incorreta."] });
  }

  return res.status(200).json({
    _id: userExist._id,
    imageProfile: userExist.imageProfile,
    token: authUserToken(userExist._id),
  });
};

//PROFILE
const profile = async (req, res) => {
  const user = req.user;

  return res.status(200).json(user);
};

//GET USER
const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const UserParams = await User.findById(id).select("-password");

    if (!UserParams) {
      return res.status(404).json({ error: ["Usuario não encontrado."] });
    }

    res.status(200).json(UserParams);
  } catch (err) {
    return res.status(404).json({ error: ["Usuario não encontrado."] });
  }
};

//EDIT
const edit = async (req, res) => {
  const { name, password } = req.body;

  let imageProfile = null;

  if (req.file) {
    imageProfile = req.file.filename;
  }

  const reqUser = req.user;
  const userDB = await User.findById(reqUser._id).select("-password");

  if (!userDB) {
    return res.status(422).json({ errors: ["Usuario não encontrado."] });
  }

  if (name) {
    userDB.name = name;
  }

  if (password) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    userDB.password = passwordHash;
  }

  if (imageProfile) {
    userDB.imageProfile = imageProfile;
  }

  await userDB.save();

  return res.status(200).json(userDB);
};

module.exports = {
  register,
  login,
  profile,
  getUser,
  edit,
};
