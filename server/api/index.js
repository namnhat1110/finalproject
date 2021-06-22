const express = require("express");
const router = express.Router();

// const usersRouter = require("./users.api");
// router.use("/users", usersRouter);

const gamesRouter = require("./games.api");
router.use("/games", gamesRouter);

const authRouter = require("./auth.api");
router.use('/auth', authRouter)

const usersRouter = require("./users.api");
router.use('/users', usersRouter)

module.exports = router;