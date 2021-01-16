const sendButton = document.getElementById("sendButton");

const database = firebase.database();


sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(database.ref('/').json());
})