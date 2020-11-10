const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middle');
    next()
})

app.use((req, res, next) => {
    console.log('In another middle');
})
// const routes = require('../routes')

const server = http.createServer(app)

server.listen(3000);