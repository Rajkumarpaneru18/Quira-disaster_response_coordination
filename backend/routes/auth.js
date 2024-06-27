const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

const { checkRole } = require("../utils/checkRole")

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
        return res.status(400).send("Invalid username or password.");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '86400s'
    });
    const role = await checkRole(username);
    res.send({ token, role });
});

module.exports = router;