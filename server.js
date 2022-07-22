const express = require('express')
const app = express()
const port = 3000


app.get('/users', (req, res) => {
  res.status(200).json({ text: 'Users!' })
})

app.get('/subscriptions', (req, res) => {
  res.status(200).json({ text: 'Subscriptions!' })
})

app.get('/deliveries', (req, res) => {
  res.status(200).json({ text: 'Deliveries!' })
})

app.get('/', (req, res) => {
  res.status(200).json({ text: 'Nothing here bud.' })
})

app.listen(port, () => {
  console.log(`Interview app listening at http://localhost:${port}`)
})