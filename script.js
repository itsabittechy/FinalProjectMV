
const url = new URL(window.location);
const listId = url.searchParams.get('id')
if (!listId) {
  const listId = Math.floor(Math.random()*10**8)
  url.searchParams.set('id', listId);
  window.history.pushState(null, '', url.toString());
}

document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if (event.key == "Enter") { addItem(h2); }
});

let groceryList = []

addItem = async () => {
  const item = document.createElement("h2")
  // Get the item text:
  const val = document.querySelector("#userInput").value
  // Check if is in list already
  const isInListAlready = !!groceryList.find(x => x.text.toLowerCase() === val.toLowerCase())
  if (isInListAlready) {
    alert('Item is already in list!') 
    return
  }
  // Add the item to the array
  groceryList.push({
    text: val,
    purchased: false
   
  })
  // Send it to the backend to add it to the database
  const response = await axios.post(`http://localhost:3000/grocery/${listId}`, { groceryList })
  if (response.status === 200) {
    // Add the item to the DOM
    item.textContent = " " + val;
    document.querySelector("#groceryItems").appendChild(item);
    // Functionality to mark items purchased
    item.addEventListener("click", () => {
      const listItem = groceryList.find(x => x.text === val)
      if (!listItem.purchased) {
        listItem.purchased = true
        item.style.textDecoration = "line-through"
      } else {
        listItem.purchased = false
        item.style.textDecoration = "none"
      }
      axios.post(`http://localhost:3000/grocery/${listId}`, { groceryList })
    })

    item.addEventListener("dblclick", (e) => {
      groceryList = groceryList.filter(x => x.text !== val)
      item.remove()
      console.log(groceryList)
      axios.post(`http://localhost:3000/grocery/${listId}`, { groceryList })
      var groceryL = [] 
      groceryL=JSON.parse(localStorage.getItem("groceryL"))
      groceryArray = groceryL.filter(x => x !== val)
     localStorage.setItem("groceryL", JSON.stringify(groceryArray))
    })

    document.querySelector("#userInput").value = "";
  } else {
    alert('Sorry, we could not save your item')
  }
}
document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    //  localStorage.setItem("groceryList",JSON.stringify(groceryList.push(document.querySelector("#userInput").value)))}
     var groceryList = [] 
     groceryList=JSON.parse(localStorage.getItem("groceryL"))
     groceryList.push(document.querySelector("#userInput").value)
    localStorage.setItem("groceryL", JSON.stringify(groceryList))
//  var a = [];
// a.push(JSON.parse(localStorage.getItem('groceryL')));
// localStorage.setItem('groceryL', JSON.stringify(a));
}});  


