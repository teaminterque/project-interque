const sendButton = document.getElementById("sendButton");
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
  item.appendChild(document.createTextNode(snapshot.val()));
  
  // Add it to the list:
  var list = document.createElement('ul')
  list.appendChild(item);

  chatsList.appendChild(list);

})

// function makeUL(array) {
//     // Create the list element:
//     var list = document.createElement('ul');

//     for (var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item); 
//     }

//     // Finally, return the constructed list:
//     return list;
// }

function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};