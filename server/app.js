require('dotenv').config();
const express = require('express')()
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

io.on('connection', (socket) => {
  console.log('a user connected')
})

http.listen(port, () => {
  console.log('server started on port: ', port)
})