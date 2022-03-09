const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello fr8')
})

app.listen(3000, () => {
  console.log(`Server started on 3000`)
})