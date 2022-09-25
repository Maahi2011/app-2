var firebaseConfig = {
      apiKey: "AIzaSyCTCMqsIfyJVV-Tm9ugxkp2uhHZewxhTqo",
      authDomain: "kwitter-e232a.firebaseapp.com",
      databaseURL: "https://kwitter-e232a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e232a",
      storageBucket: "kwitter-e232a.appspot.com",
      messagingSenderId: "33866665807",
      appId: "1:33866665807:web:a14dd7e0a65a9173c03f3a"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}