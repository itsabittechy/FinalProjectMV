// const sqlite3 = require("sqlite3")
// const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err)=>{
//     if(err)
//      {
//      return console.error(err.message);
//      }
//      else{
//         console.log("Success!!");
//      }
//     })

// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.static('public'));
// app.listen(port, () => {
// console.log(`Server listening at http://localhost:${port}`)
// })


// document.querySelector("#eraser").addEventListener("click", () => {
//     document.querySelector("#groceryItems").textContent = "";
//   })
  
document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem(h2);
  });
  
addItem = () => {
const item = document.createElement("h2")
    item.textContent = " " + document.querySelector("#userInput").value;
    let i = 0;
    let txt = 'writing typing effect!'; /* The text */
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }  
  
item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through")
        item.style.textDecoration = "line-through";
      else
        item.style.textDecoration = "none";
    })
     if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";

const fetch = asyncitem.addEventListener("double-click",() =>{

      })
document.querySelector("#groceryItems").appendChild(item);
document.querySelector("#userInput").value = "";
  }