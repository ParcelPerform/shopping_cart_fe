(function () {
  var socket = io();
  
  socket.on('orderProcessed', function(msg){
    alert('Your order shipped!!')
  })
})()
