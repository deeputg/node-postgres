const express = require('express')

app = express()

PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log("server listening to port ", PORT)
})