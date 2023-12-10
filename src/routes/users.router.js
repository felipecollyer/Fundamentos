const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRouter = Router();

function myMiddlaware(req, res, next) {
  console.log(req.body);
  next();
}

const usersCrontoller = new UsersController();

usersRouter.post("/", myMiddlaware, usersCrontoller.create);

module.exports = usersRouter;
