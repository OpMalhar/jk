function adduser(){
var username=document.getElementById("text").value;
localStorage.setItem("username",username);

window.location="kwitter_room.html";
}