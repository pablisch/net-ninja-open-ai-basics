const express = require('express')
const { generateMeta, generateImage } = require('./controllers/openaiController')
const PORT = process.env.PORT || 3333

// express app setup
const app = express()
app.listen(PORT, () => console.log(`listening at ${PORT}`))

// middleware
app.use(express.json())
app.use(express.static('public'))

// routes
app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)
