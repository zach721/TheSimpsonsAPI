const express = require('express')
const app = express()
const api = require("./api/api")

app.use(express.json({extended:false}))
app.use("/api/api",api)

app.get('/', function (req, res) {
  res.send(api)
})

app.listen(3000)
