const Contact = require("../models/Contact");

// CONTACT
const NewContact = async (req, res) => {
  const { name, phone, location, description } = req.body;

  try {
    const newContact = await Contact.create({
      name,
      phone,
      location,
      description,
    });

    if (!newContact) {
      return res
        .status(422)
        .json({ errors: ["Erro ao enviar, tente novamente mais tarde."] });
    }

    return res.status(201).json(newContact);
  } catch (err) {
    return res
      .status(422)
      .json({
        errors: [
          "O Sistema Está Sendo Atualizado, Tente novamente mais tarde.",
        ],
      });
  }
};

module.exports = {
  NewContact,
};
