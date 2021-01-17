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
    database.ref('/' + "messages").update({
      [1 + nameEntry.value] : textEntry.value
    });
  }
  textEntry.value = null;
})
