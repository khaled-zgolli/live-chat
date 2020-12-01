const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html')

});


io.on('connection',function(socket){

    console.log('user connected');
    socket.on('chat',function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});


http.listen(3000,function(){
    console.log('server in now on port 3000');
});