 var firebaseConfig = {
    apiKey: "AIzaSyBUi7BBHXQ8scN6fYIVY9Mb-Rw8zxR2VXg",
    authDomain: "let-s-chat-1234.firebaseapp.com",
    databaseURL: "https://let-s-chat-1234-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-1234",
    storageBucket: "let-s-chat-1234.appspot.com",
    messagingSenderId: "59758837016",
    appId: "1:59758837016:web:6844dcf8251e33e1c8326d"
  };


//     please add username below the code inside the bracket
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome !"+user_name;
    function addRoom(){
          
      //     please use room_name instead of Room_name
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="chat_page.html";
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      // please write room_name inside the bracket
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
} 