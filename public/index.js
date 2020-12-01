
 const socket = io();

 const message=document.querySelector('.message');
 const user=document.querySelector('.user');
 const btn=document.querySelector('.send');
 const output=document.querySelector('.output');
 const feedback=document.querySelector('.feedback');


 btn.addEventListener('click',function(){
     socket.emit('chat',{
         message:message.value,
         user:user.value
     });
     message.value = '';
 });

 message.addEventListener('keypress', function(){
    socket.emit('typing', user.value);
});

 socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.user + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});