const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 5001
require('dotenv').config()
app.use(cors())
app.use(express.json())

const logRoutes = require('./routes/log.routes')
const connectToDb = require('./db/db')
connectToDb()

app.use('/api', logRoutes)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})