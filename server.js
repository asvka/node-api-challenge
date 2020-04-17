const express = require('express')
const cors = require('cors')
const server = express()
const projectRouter = require('./data/routers/projectRouter')
const actionRouter = require('./data/routers/actionRouter')

server.use(express.json())
server.use(cors())
server.use(logger)
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

//error handling
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "There seems to be a glitch in the Matrix."
    })
})

function logger(req, res, next) {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)
    next()
}

module.exports = server;