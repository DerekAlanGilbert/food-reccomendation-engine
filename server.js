const express = require('express')
const cors = require('cors')
const app = express()
const ApiRoutes = require('./routes/routes.js')

app.use(cors())

app.use(express.json())

app.use('/api/v1', ApiRoutes)

app.listen(3000)
