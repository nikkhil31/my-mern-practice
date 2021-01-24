const notFound = (req, res, next) => {
    res.status(404)
    const error = new Error(`Not Found - ${req.originalUrl}`)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const error = res.statusCode === 200 ? 500 : res.statusCode
    console.log(error)
    res.status(error)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export { notFound, errorHandler }
