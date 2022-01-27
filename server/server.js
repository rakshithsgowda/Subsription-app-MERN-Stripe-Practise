import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import { readFileSync } from 'fs'
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

const app = express()

// Lets add

// DB
mongoose
  .connect(
    process.env.MONGO_DB_URI.replace(
      '<password>',
      process.env.MONGO_DB_URI_PASSWORD
    )
  )
  .then(() => console.log(`DB connected from the Server contect`))
  .catch((err) => console.log(`there is an error from the DB ${err}`))

// Middlewares
app.use(express.json({ limit: '2mb' }))
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
)
// autoroutes
app.get('/api/register', (req, res) => {
  res.send(`this is a from the api of subscription app`)
})

// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
