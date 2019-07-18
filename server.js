const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express()
const PORT = 3000
const ApiRoutes = require('./routes/routes.js')

connectDB()
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.use('/api/v1', ApiRoutes)

app.listen(PORT, () => console.log(`server running on ${PORT}`))
