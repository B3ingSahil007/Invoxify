const User = require('../models/registeration-model')
const bcrypt = require('bcryptjs')

const home = async (req, res) => {
    try {
        res.status(200).send({ message: "Hello World, I Am Sahil Miyawala, And This Is MERN Stack E-Commerse Website !!" })
        // console.log("Hello World, I Am Sahil Miyawala, And This Is MERN Stack E-Commerse Website !!");
    } catch (err) {
        res.status(500).send({ message: "Page Not Found !!" })
        console.error("Internal Server Error !!", err);
    }
}

const registration = async (req, res) => {
    try {
        const { firstname, lastname, username, profilePicture, mnumber, address, email, password } = req.body

        const userExist = await User.findOne({ $or: [{ email }, { mnumber }] });

        if (userExist) {
            console.log("E-Mail Or Mobile Number Is Already Registered || ", "E-Mail : ", email, "|| Mobile Number : ", mnumber);
            return res.status(400).json({ message: "E-Mail Or Mobile Number Is Already Registered", email, mnumber })
        }

        const saltRound = 10
        const hashpassword = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({ firstname, lastname, username, profilePicture, mnumber, address, email, password, hashpassword })

        res.status(201).send({ data: "User Created Successfully", userCreated, token: await userCreated.generateToken(), userID: userCreated._id.toString() })
        console.log("User Created : ", userCreated);
    } catch (err) {
        res.status(500).send({ message: "Page Not Found !!" })
        console.error("Internal Server Error !!", err);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email })
        // console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials - User not found" })
        }

        const isPasswordMatch = await userExist.comparePassword(password)

        if (isPasswordMatch) {
            res.status(200).send({ data: "User Login Successfull !!", token: await userExist.generateToken(), userID: userExist._id.toString(), email })
            console.log("Login Successfull !!");
        } else {
            res.status(401).json({ message: "Invalid E-Mail Or Password" })
        }
    } catch (err) {
        res.status(500).send({ message: "Page Not Found !!" })
        console.error("Internal Server Error !!", err);
    }
}

module.exports = { home, registration, login }