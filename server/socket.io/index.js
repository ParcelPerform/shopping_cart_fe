const SocketIoServer = require('socket.io')
const processOrderConsumer = require('../kafka/process-order-consumer')

let socketServer

const initSocketServer = (httpServer) => {
  if(socketServer) {
    return
  }

  socketServer = new SocketIoServer(httpServer)

  processOrderConsumer.onConsume(kafkaMessage => {
    socketServer.emit('orderProcessed', {
      data: kafkaMessage.value
    })
  })
}

module.exports = {
  initSocketServer
}