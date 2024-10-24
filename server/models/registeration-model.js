const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const JWTKEY = process.env.JWT_SECRET_KEY
const bcrypt = require('bcryptjs')

const registerationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    profilePicture: {
        type: String,
        default: 'https://toppng.com/uploads/preview/file-svg-profile-icon-vector-11562942678pprjdh47a8.png'
    },
    mnumber: {
        type: Number,
        require: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    hashpassword: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

registerationSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.hashpassword)
}

registerationSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userID: this._id.toString(),
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            profilePicture: this.profilePicture,
            mnumber: this.mnumber,
            address: {
                street: this.address.street,
                city: this.address.city,
                state: this.address.state,
                zipCode: this.address.zipCode,
                country: this.address.country
            },
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin,
        }, JWTKEY, {
            expiresIn: '10d'
        });
    } catch (error) {
        console.error("Token Generation Error:", error);
    }
}


const User = new mongoose.model('User', registerationSchema)
module.exports = User