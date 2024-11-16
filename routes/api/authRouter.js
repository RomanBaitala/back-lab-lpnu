const express = require("express");
const ctrl = require("../../controllers/auth");
const validation = require("../../middleware/validation");
const auth = require('../../middleware/auth')
const { schemas } = require("../../models/userModel");
const router = express.Router();

router.post("/signup", validation(schemas.registerSchema), ctrl.signup);

router.post("/signin", validation(schemas.loginSchema), ctrl.signin);

router.get("/current", auth, ctrl.getCurrent);

router.post("/logout", auth, ctrl.logout);


module.exports = router;