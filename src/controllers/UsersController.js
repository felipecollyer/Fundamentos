const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, email } = req.body;

    if (!name) {
      throw new AppError("Name obrigatorio");
    }

    res.status(201).json({ name, email });
  }
}

module.exports = UsersController;
