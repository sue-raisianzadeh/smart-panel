const express = require('express')
const { join } = require('path')
const server = express()
const port = process.env.PORT || 3000
const nodemailer = require('nodemailer')
require('dotenv').config()

// Correctly require the knex configuration
const knexConfig = require('./database/knexfile')
const environment = process.env.NODE_ENV || 'development'
const config = knexConfig[environment]
const knex = require('knex')(config)

// Google APIs
const { google } = require('googleapis')
const serviceAccountKey = require('./spry-scope-419500-5f335343ba8d.json')
const scopes = ['https://www.googleapis.com/auth/drive']
const jwtClient = new google.auth.JWT(
  serviceAccountKey.client_email,
  null,
  serviceAccountKey.private_key,
  scopes
)
// Initialize drive after successful authorization
let drive // Define drive outside the scope of the authorization to make it accessible later
jwtClient.authorize(function (error) {
  if (error) {
    console.error('Error making request to generate access token:', error)
    return
  }
  drive = google.drive({ version: 'v3', auth: jwtClient })
})

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
server.use(express.json())
server.use(express.static(join(__dirname, '..', 'dist')))

if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'dist', 'index.html'))
  })
}

server.post('/api/add-user', async (req, res) => {
  const { name, email, phone, message } = req.body

  try {
    // Save form submission to the database
    await knex('smartpanel').insert({ name, email, phone, message })
    console.log('Form submission saved:', { name, email, phone, message })

    // Prepare the CSV data to be appended
    const newCsvData = `"${name}","${email}","${phone}","${message}"\n`

    // ID of the existing file you want to update
    const existingFileId = '1M2E5uRyhSnVRLLKST2KvK4y_Av4LCCy8'

    // Get the existing CSV file from Google Drive
    const existingCsvFile = await drive.files.get(
      {
        fileId: existingFileId,
        alt: 'media',
      },
      { responseType: 'stream' }
    )

    let existingData = ''
    existingCsvFile.data.on('data', (chunk) => (existingData += chunk))
    existingCsvFile.data.on('end', async () => {
      // Append the new CSV data to the existing CSV data
      const updatedCsvData = existingData + newCsvData

      // Update the file on Google Drive with the new CSV data
      const fileMetadata = {
        name: 'form_data.csv',
      }
      const media = {
        mimeType: 'text/csv',
        body: updatedCsvData,
      }

      const file = await drive.files.update({
        fileId: existingFileId,
        resource: fileMetadata,
        media: media,
        fields: 'id',
      })

      console.log('Updated file ID:', file.data.id)
      res.status(200).json({
        message: 'Form submission saved and uploaded to Google Drive.',
      })
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Error processing form submission.' })
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
