const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        return console.error(err.message);
    } else {
        console.log("Database connection successful");
    }
})

// db.run(`CREATE TABLE GroceryList (
//     id TEXT PRIMARY KEY,
//     list TEXT NOT NULL
// )`)

module.exports = db
