const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


const PORT = 3000

app.get('/', (request, response) => {
    response.send('Hello worldsadasd')
})

app.listen(PORT, () => {
    console.log(`Sever is running${PORT}`)
})