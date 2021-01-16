require('dotenv').config()
const opentok = require('opentok')
const OT = new opentok(process.env.API_KEY, process.env.API_SECRET)
const sessionId = "1_MX40NzA4NDE0NH5-MTYxMDc4NDI3Mzk4N35kZ0U1R1o1ZDhOTysxdWNkNVE4NG5SNDN-UH4"

// OT.createSession((err, session) => {
//   console.log(session.sessionId);
// })

const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/token', (req, res) => {
  res.send({
    apiKey = process.env.API_KEY,
    sessionId,
    token = OT.generateToken(sessionId, { role: 'publisher' })
  })
})

app.listen(5500)