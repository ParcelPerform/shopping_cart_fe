(function () {
  var socket = io();
  
  socket.on('orderProcessed', function(msg){
    console.log(msg)
    alert(`Your order processed!!`)
  })
})()
