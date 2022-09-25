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
 document.getElementById("user_name").innerHTML="welcome "+user_name+"!"

 function addroom(){
       room_name=document.getElementById("roomname").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"Maahi is adding room names"
       })
      localStorage.setItem("room_name",room_name);
window.location="app_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="app_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location
}

