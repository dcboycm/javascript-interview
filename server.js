
const express = require('express')
const app = express()
const port = 3000


const allUsers = require('./data/users.json'); // import all user data
const allSubscriptions = require('./data/subscriptions.json'); // import all subscription data
const allDeliveries = require('./data/deliveries.json'); // import all deliveries data

app.get('/users', (req, res) => {
  res.status(200).json(allUsers)
})

app.get('/subscriptions', (req, res) => {
  res.status(200).json(allSubscriptions)
})

app.get('/deliveries', (req, res) => {
  res.status(200).json(allDeliveries)
})

app.get('/', (req, res) => {
  res.status(200).json({ text: 'Nothing here bud.' })
})

app.listen(port, () => {
  console.log(`Interview app listening at http://localhost:${port}`)
})