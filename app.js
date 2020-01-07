const express = require('express')
require('dotenv').config()
const { getUsers, getUser, insertUser } = require("./db")

app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ status: true, message: "home" })
})
app.get('/users', getUsers)
app.get('/user/:userId', getUser)
app.post('/user', insertUser)

PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log("server listening to port ", PORT)
})