const express = require('express')

app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ status: true, message: "home" })
})

PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log("server listening to port ", PORT)
})