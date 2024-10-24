const errorMiddleware = () => {
    const status = err.status
    const message = err.message || "Backend Error"
    const extraDetails = err.extraDetails || "Error From Backend"

    return res.status(status).json({ message, extraDetails })
}

module.exports = errorMiddleware 