
const express = require('express')
const app = express()
const port = 3000


const allUsers = require('./data/users.json'); // import all user data
const allSubscriptions = require('./data/subscriptions.json'); // import all subscription data
const allDeliveries = require('./data/deliveries.json'); // import all deliveries data

app.get('/users', (req, res) => {
  let sortedUsers = allUsers
  sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
  res.status(200).json(sortedUsers)
})

app.get('/users/id/:id', (req, res) => {
  const user = allUsers.find(c => c.id === parseInt(req.params.id))
  if(!user)res.status(404).send('User not found')
  res.status(200).json([user])
})

app.get('/users/email/:email', (req, res) => {
  const user = allUsers.find(c => c.email === (req.params.email))
  if(!user)res.status(404).send('User not found')
  res.status(200).json(user)
})

app.get('/users/subscription_id/:subscription_id', (req, res) => {
  const user = allUsers.find(c => c.subscription_id === parseInt(req.params.subscription_id))
  if(!user)res.status(404).send('User not found')
  res.status(200).json(user)
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