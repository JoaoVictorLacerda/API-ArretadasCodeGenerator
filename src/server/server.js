require('dotenv').config()

const express = require('express')
const connectToDatabase = require('../database/Conexao')
const routes = require('../routes')

const app = express()

app.use(express.json())
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})
connectToDatabase();


