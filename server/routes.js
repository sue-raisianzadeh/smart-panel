const express = require('express')
const knex = require('knex')(require('./knexfile').development)
const router = express.Router()

router.post('/add-user', async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    }
    await knex('smartpanel').insert(newUser)
    res.status(201).json({ message: 'Contact added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
