const db = require('./database')
const cors = require('cors')
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Grocery List app!')
})
const database = new Datastore('database.db')
database.loadDatabase();

app.post('/grocery/:list', (req, res) => {
    console.log(req.body) // Instead of logging it, you need to save it to the db!
    res.status(200).send('You hit the grocery/:list endpoint!')
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
