const sendButton = document.getElementById("sendButton");

const database = firebase.database();


sendButton.addEventListener("click", (e) => {
  sendButton.innerText = "Hello World";
  //e.preventDefault();
  //console.log(database.ref('/').json());
})