const SocketIoServer = require('socket.io')

let socketServer

const initSocketServer = (httpServer) => {
  if(socketServer) {
    return
  }

  socketServer = new SocketIoServer(httpServer)

  socketServer.on('connection', socket => {
    console.log("On new socket connection")

    socket.on('event 1', (eventparam1, eventparam2) => {
      console.log("On event 1")
      console.log(eventparam1)
      console.log(eventparam2)
    })

    socket.on('chat message', (msg) => {
      socketServer.emit('chat message', msg)
    })

    socket.on('disconnect', () => {
      console.log("Hei, disconnecting!")
    })
  })
}

module.exports = {
  initSocketServer,
  getSocketServer: () => socketServer
}