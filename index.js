var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();
var server = app.listen(4000,function(){
console.log('Listening to the port 4000');

});

//Static Files
app.use(express.static('public'));  //part of express


//Socket Setup
var io = socket(server);

io.on('connection',function(socket){
  console.log('made socket connection',socket.id);

  socket.on("chat",function(data){
    io.sockets.emit('chat',data);
  });
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data)
  });

});
