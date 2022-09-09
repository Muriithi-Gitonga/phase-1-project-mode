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
    `
    let form = document.createElement('form')
    form.id = "users"
    form.innerHTML = `
    <label for="fname"><h3>Add a description</h3></label>
    <input type="text" id="description"  placeholder="Description">
    <input type="submit" value="Add description">
    
    `

    let userDescription = document.createElement('div')
    userDescription.id = "userDescription"
    li.appendChild(form)
    form.appendChild(userDescription)
    
    document.getElementById("character-list").appendChild(li)
    
    //adding event listener for  the description form 
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addDescription(e.target.description.value)
    })
    
    

}
// adding the description to the dom
function addDescription (descriptionValue) {
    let userDescription = document.createElement('li')
    userDescription.textContent = descriptionValue
    document.getElementById('userDescription').appendChild(userDescription)


}



