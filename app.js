const express = require('express')
const path = require('path')
const app = express()
const { db } = require('./models')


const morgan = require('morgan')
app.use(express.static(path.join(__dirname, './public')))
app.use(morgan('dev'))

app.get('/', (request, response) => {
    response.send('hello world')
})

db.authenticate().then(() => {
    console.log('connected to the database')
})

const PORT = 3000

const init = async () => {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`)
    })
  }
  
  init();