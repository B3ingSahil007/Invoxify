const express = require('express')
const router = express.Router()
const validate = require('../middleware/validate.middleware')
const { signUpSchema, loginSchema } = require('../validators/auth-validator')

const { home, registration, login } = require('../controllers/auth-controller')

router.route("/").get(home)

router.route("/registration").post(validate(signUpSchema), registration)

router.route("/login").get(validate(loginSchema), login)

module.exports = router;