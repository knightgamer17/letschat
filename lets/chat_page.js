 var firebaseConfig = {
    apiKey: "AIzaSyBUi7BBHXQ8scN6fYIVY9Mb-Rw8zxR2VXg",
    authDomain: "let-s-chat-1234.firebaseapp.com",
    databaseURL: "https://let-s-chat-1234-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-1234",
    storageBucket: "let-s-chat-1234.appspot.com",
    messagingSenderId: "59758837016",
    appId: "1:59758837016:web:6844dcf8251e33e1c8326d"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg.value");
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,like:0
      });
      document.getElementById("msg").value="";

  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
  }