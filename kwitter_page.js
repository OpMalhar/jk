//YOUR FIREBASE LINKS
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
var username =localStorage.getItem("username");
var roomname=localStorage.getItem("roomname");
function send(){
      var msg=document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";

}  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot)
   { childKey  = childSnapshot.key;
       childData = childSnapshot.val();
        if(childKey != "purpose")
         {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id);
 console.log(message_data);
  name = message_data['name'];
   message = message_data['message'];
    like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         row = name_with_tag + message_with_tag +like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
          
//End code
      } });  }); }
getData();
