const sendButton = document.getElementById("sendButton");
const textEntry = document.getElementById("textEntry");
const nameEntry = document.getElementById("nameEntry");

var time = new Date();

const database = firebase.database();

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(nameEntry.value == null || textEntry.value == null){
    alert("Please enter your name and a message.");
  } else {

    var msgNum = 0; 
    database.ref('/Count').on('value', (snapshot) => {
      msgNum = snapshot.val();
    });

    database.ref('/' + "messages").update({
      [(msgNum + 1) + nameEntry.value] : textEntry.value
    });
    
    database.ref('/Count').set(msgNum + 1);
  }
  textEntry.value = null;
})
