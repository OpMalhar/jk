
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA-20C3r84RvA0BjAYRDkJ4RCJl31QHCEo",
      authDomain: "baufid-61adf.firebaseapp.com",
      databaseURL: "https://baufid-61adf-default-rtdb.firebaseio.com",
      projectId: "baufid-61adf",
      storageBucket: "baufid-61adf.appspot.com",
      messagingSenderId: "356070002464",
      appId: "1:356070002464:web:475f9cc279978ef481d145"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="welcome"+username;
    function addroom(){
      var roomname= document.getElementById("Roomname").value;
      firebase.database().ref("/").child(roomname).update({purpose:"addingroomname"});
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_room.html";
}
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname"+Room_names);
       var row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
 function redirectToRoomName(name){console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";

}