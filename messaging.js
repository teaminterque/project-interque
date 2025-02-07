const sendButton = document.getElementById("sendButton");
const endButton = document.getElementById("endButton");
const textEntry = document.getElementById("textEntry");
const nameEntry = document.getElementById("nameEntry");
const chatsList = document.getElementById("chatsList");

var time = new Date();

const database = firebase.database();
var msgs = []

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(nameEntry.value == "" || textEntry.value == ""){
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

database.ref('/messages/').on('child_added', (snapshot, prevChildKey) => {
  msgs.push([snapshot.val()])

  // Create the list item:
  var item = document.createElement('li');

  // Set its contents:
  var name = snapshot.key.replace(/[0-9]/g, '');
  item.appendChild(document.createTextNode(name + ": " + snapshot.val()));
  
  // Add it to the list:
  var list = document.createElement('ul')
  list.appendChild(item);

  chatsList.appendChild(list);
})

endButton.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/messages/').remove();
  database.ref('/Count').set(0);
  window.location.href = "https://interque.netlify.app/settings.html"
})


function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};