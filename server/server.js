const express = require('express')
const path = require('path')
const knex = require('knex')(require('./database/knexfile').development)
const nodemailer = require('nodemailer')
require('dotenv').config()

const server = express()
const port = process.env.PORT || 3000

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.post('/api/add-user', async (req, res) => {
  const { name, email, phone, message } = req.body

  try {
    // Insert user data into 'smartpanel' table
    await knex('smartpanel').insert({ name, email, phone, message })

    // Send confirmation email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your message',
      text: `Dear ${name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nBest regards,\nYour Team`,
    }

    transporter.sendMail(userMailOptions, (error) => {
      if (error) {
        return console.error('Error sending email to user:', error)
      }
    })

    // Send notification email to the site owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'site-owner-email@example.com', // Replace with the site owner's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    }

    transporter.sendMail(ownerMailOptions, (error) => {
      if (error) {
        return console.error('Error sending email to owner:', error)
      }
    })

    res.status(201).json({ message: 'Contact added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
