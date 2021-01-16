// require('dotenv').config()
// const opentok = require('opentok')
// const OT = new opentok(process.env.API_KEY, process.env.API_SECRET)
// const sessionId = "1_MX40NzA4NDE0NH5-MTYxMDc4NDI3Mzk4N35kZ0U1R1o1ZDhOTysxdWNkNVE4NG5SNDN-UH4"

// // OT.createSession((err, session) => {
// //   console.log(session.sessionId);
// // })

// const express = require('express')
// const app = express()

// let sessions = {};


// app.use(express.static('public'))

// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "/views/index.html");
// });
 
// const listener = app.listen(process.env.PORT, () => {
//   console.log("Your app is listening on port " + listener.address().port);
// });

// // app.get('/token', (req, res) => {
// //   res.send({
// //     apiKey = process.env.API_KEY,
// //     sessionId,
// //     token = OT.generateToken(sessionId, { role: 'publisher' })
// //   })
// // })

// const OpenTok = require("opentok");
// const OT = new OpenTok(process.env.API_KEY, process.env.API_SECRET);

// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "/views/landing.html");
// });

// app.get("/session/:room", (request, response) => {
//   response.sendFile(__dirname + "/views/index.html");
// });


// app.post("/session/:room", (request, response) => {
//   const roomName = request.params.room;
//   // Check if the session already exists
//   if (sessions[roomName]) {
//     // Generate the token
//     generateToken(roomName, response);
//   } else {
//     // If the session does not exist, create one
//     OT.createSession((error, session) => {
//       if (error) {
//         console.log("Error creating session:", error);
//       } else {
//         // Store the session in the sessions object
//         sessions[roomName] = session.sessionId;
//         // Generate the token
//         generateToken(roomName, response);
//       }
//     });
//   }
// });

// function generateToken(roomName, response) {
//   // Configure token options
//   const tokenOptions = {
//     role: "publisher",
//     data: `roomname=${roomName}`
//   };
//   // Generate token with the OpenTok SDK
//   let token = OT.generateToken(
//     sessions[roomName],
//     tokenOptions
//   );
//   // Send the required credentials back to to the client
//   // as a response from the fetch request
//   response.status(200);
//   response.send({
//     sessionId: sessions[roomName],
//     token: token,
//     apiKey: process.env.API_KEY
//   });
// }



