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

app.post('/grocery/:id', (req, res) => {
    const list = escape(JSON.stringify(req.body.groceryList))
    console.log(list)
    const id = req.params.id
    // db.run(`INSERT INTO GroceryList (id,list) VALUES ('${id}', '${list}');`)
    res.sendStatus(200)
})

app.get('/grocery/:id', (req, res) => {
    // Get the grocery list from the database and send it to the frontend
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

// document.querySelector("#userInput").addEventListener("keydown", (event) => {
//   if (event.key == "dblclick") { localStorage.setItem("groceryList",groceryList)}
// });  
// localStorage.removeItem("")