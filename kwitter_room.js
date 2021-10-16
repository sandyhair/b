
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDRw84TcFZUjtI-YstW0iunPH5IXVtdiWY",
      authDomain: "ughh-f6b8c.firebaseapp.com",
      databaseURL: "https://ughh-f6b8c-default-rtdb.firebaseio.com",
      projectId: "ughh-f6b8c",
      storageBucket: "ughh-f6b8c.appspot.com",
      messagingSenderId: "674937232952",
      appId: "1:674937232952:web:786464b00a8a52575d50cd",
      measurementId: "G-HEWNYLR8QM"
    };
    
firebase.initializeApp(firebaseConfig);

    function addRoom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "addroomname"
    } 
    )
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

