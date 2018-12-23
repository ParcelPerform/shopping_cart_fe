const http = require('http')

// Express APP
const app = require('./app/app')

// https://nodejs.org/docs/latest-v8.x/api/http.html#http_http_createserver_requestlistener
const httpServer = http.createServer(app.app)

const socketIo = require('./socket.io')
socketIo.initSocketServer(httpServer)

httpServer.listen(9100, () => console.log('Listening 9100'))