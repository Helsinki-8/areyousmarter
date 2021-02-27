const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3010
const questions = require('./data.json');

const rooms = [
  {
    id: 'default',
    isStarted: false,
    questionId: 0,
    maxScore : 100,
    scores: []
    // score is arr of obj with key id, user, & score
  }
]

const newPlayerMessage = "a new challenger has entered the game!"

const users = []

io.on('connection', (socket) => {
  console.log(socket.id, 'ini isi socket<<<<<<<<<<<<')
  let ID = socket.id

    socket.on('newPlayer', function (payload) {
      payload.id = ID
      users.push(payload)
      io.emit('getAllUsers', users) // send to other users except the client
      io.emit('newPlayer', { message: newPlayerMessage })
      let filteredRooms = rooms.filter(room => room.isStarted === false)
      socket.emit('getAllRooms', filteredRooms)
    })

    socket.on('backToHome', () => {
      let filteredRooms = rooms.filter(room => room.isStarted === false)
      socket.emit('getAllRooms', filteredRooms)
    })

    // socket.emit("init", message)
    socket.on('joinRoom', (user, roomId) => {
      let room = rooms.find( el => el.id === roomId)
      room.scores.push({
        id: socket.id,
        user: user,
        score: 0
      })
      socket.join(roomId)
      socket.emit('initQuiz', questions)
      io.in(roomId).emit('listPlayer',room.scores);
    })
  
    socket.on('createRoom', ({user, roomId}) => {
      console.log('create room', roomId)
      let room = rooms.find( el => el.id === roomId)
      if (!room) {
        rooms.push({
          id: roomId,
          isStarted: false,
          questionId: 0,
          maxScore: 100,
          scores: [{
            id: socket.id,
            user: user,
            score: 0
          }]
        })
      } else {
        room.scores.push({
          id: socket.id,
          user: user,
          score: 0
        })
      }

      socket.join(roomId)
      room = rooms.find( el => el.id === roomId)
      io.in(roomId).emit('listPlayer',room.scores);
      let filteredRooms = rooms.filter(room => room.isStarted === false)
      socket.broadcast.emit('getAllRooms',filteredRooms)
      socket.emit('initQuiz', questions)
    })
  
    socket.on('playerStartGame', (roomId) => {
      console.log('Player start game ', roomId)
      let room = rooms.find( el => el.id === roomId)
  
      room.isStarted = true
      console.log(rooms)
  
      io.in(roomId).emit('updateScores', room.scores)
      io.in(roomId).emit('getQuestion', questions[room.questionId])
      io.in(roomId).emit('startGame')
  
    })

    socket.on('correctAnswer', (userId, roomId) => {
      let room = rooms.find( el => el.id === roomId)
      let score = room.scores.find( el => el.id === socket.id)
  
      if (score) {
        score.score += 10
      } else {
        room.scores.push({
          id: socket.id,
          user: userId,
          score: 10
        })
      }

      if(score.score >= room.maxScore){
        io.in(roomId).emit('gameFinish', score);
      }

      io.in(roomId).emit('updateScores', room.scores)
      room.questionId = Math.floor(Math.random() * questions.length - 1);
      io.in(roomId).emit('getQuestion', questions[room.questionId])
    })
  
    socket.on('playerWin', (userId, roomId) => {
      let room = rooms.find( el => el.id === roomId)
  
      room.isStarted = false
      room.scores = []

      socket.to(roomId).emit('playerLose')
    })
})



http.listen(port, () => {
  console.log('server started on port: ', port)
})