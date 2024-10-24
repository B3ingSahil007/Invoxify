require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./utils/db')
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const errorMiddleware = require("./middleware/error-middleware");

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH, PROPFIND',
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json()) //^ It's A Middleware

app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)

app.use(errorMiddleware)

const port = 2189
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Is RUnning On Port : ${port}`)
        console.log('Changes Applied To Project')
    })
})