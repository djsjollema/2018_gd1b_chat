let express = require('express');
let app = express();
let server = require('http').Server(app);
let sockets = [];

let io = require('socket.io')(server);

io.on('connection',(socket)=>{
  console.log('got a socket connection');
  sockets.push(socket);
  socket.on('startUp',(msg)=>{
    console.log('received:' + msg);
    for(let i = 0; i<sockets.length; i++){
        sockets[i].emit('serverMsg',msg + "<br>");
    }

  })
})

app.use(express.static(__dirname + "/public/"))

app.get('/',(req,res) =>{
  //res.send('hallo wereld');
  res.sendFile(__dirname + "/public/index.html");
})

server.listen(3000,()=>{
  console.log('listen to 3000')
})
