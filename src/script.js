// adding event listeners
document.addEventListener('DOMContentLoaded', () => {
//  adding event listener to the comment form
    let comment = document.getElementById('commentform')
    
    comment.addEventListener('submit', (e) => {
        e.preventDefault()
        
        addComment(e.target.feedback.value)
        comment.reset()
    })

})


// renders value of the comment to the dorm
function addComment (userComment) {
    let comment = document.createElement('li')
    comment.textContent = userComment
    document.getElementById("comment").appendChild(comment)

}




//fetching the data from a public api
async function get () {
    let disneyObj = await (await fetch("https://api.disneyapi.dev/characters")).json()
    
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
    <form  id='users'>
    <label for="fname"><h3>Add a description</h3></label>
    <input type="text" id="description"  placeholder="Description">
    <input type="submit" value="Submit description">
    </form>`

    //adding event listener for  the description form
    
    
    document.getElementById("character-list").appendChild(li)
    let description = document.querySelector('#users')
    console.log(description)
    description.addEventListener('submit', addDescription)
    
}

// adding the description to the dom
function addDescription (e) {
    e.preventDefault()
}



