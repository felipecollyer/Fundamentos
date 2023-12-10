const { Router } = require("express");
const router = Router();
const usersRouter = require("./users.router");

router.use("/users", usersRouter);

module.exports = router;
