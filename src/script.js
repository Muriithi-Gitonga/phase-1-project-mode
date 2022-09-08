
//fetching the data from a public api
async function get () {
    let disneyObj = await (await fetch("https://api.disneyapi.dev/characters")).json()
    console.log(disneyObj)
    
    disneyObj["data"].forEach(character => renderCharacter(character))
}
get()

//rendering the data from the public api to the dom

function renderCharacter (character) {
    let li = document.createElement('li')
    li.className= "listcharacters"
    li.innerHTML = `
    
    <img class="images" src = "${character['imageUrl']}">
    <h3 class='name'> ${character['name']} </h3>
    <form action="#" id='users'>
    <label for="fname"><h3>Add a description</h3></label>
    <input type="text" id="description"  placeholder="Description">
    <input type="submit" value="Submit description">
    </form>`

    
   
    document.getElementById("character-list").appendChild(li) 
    
  
}