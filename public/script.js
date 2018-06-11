let socket = io();
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myText');
const myDiv = document.getElementById('myDiv');

myButton.addEventListener('click',()=>{
  socket.emit('startUp',myText.value);
  myText.value = "";
});

socket.on('serverMsg',(msg)=>{
  myDiv.innerHTML += msg;
})
