// public api https://api.disneyapi.dev/characters

//adding event listener
document.addEventListener('DOMContentLoaded', () => {
    let feedback = document.querySelector("#feedback-form")
    feedback.addEventListener('submit', (e) => {
        e.preventDefault()
        renderFeedback(e.target.feedback.value)
        feedback.reset()
    })

    let description = document.querySelector("#description-form")
    description.addEventListener('submit', (e) => {
        e.preventDefault()
        renderDescription(e.target.description.value)
        description.reset()
    })
    
})

//render description to the dom
function renderDescription(description) {
    let li = document.createElement('li')
    li.textContent = description
    document.querySelector("#character-description").appendChild(li)
}



// render feedback to the dom
function renderFeedback (feedback) {
    let li = document.createElement('li')
    li.textContent = feedback
    document.querySelector("#review-list").appendChild(li)
}

// renders a one character on the dom
function renderCharacter (data) {
    let beerName = document.querySelector("#character-name");
    beerName.innerText = data.name
    let beerImage = document.querySelector("#character-image");
    beerImage.setAttribute("src", data.imageUrl);
    

}


async function initialize () {
    let oneCharacter = await(await (fetch("https://api.disneyapi.dev/characters/6"))).json()
    renderCharacter(oneCharacter)
}


initialize()





// renders character names to the navbar and an event listener
function renderAllCharacterNames (character) {
  
    let ul = document.querySelector("ul")
    character['data'].forEach(char => {
        let li = document.createElement('li')
        li.innerHTML = char.name
        ul.appendChild(li)
        li.addEventListener('click', () =>renderCharacter(char))
    });    
}



// get all the data from the api
async function initializeAll () {
    let characterObj = await(await (fetch("https://api.disneyapi.dev/characters"))).json()
    renderAllCharacterNames(characterObj) 
}



initializeAll()

































// // adding event listeners
// document.addEventListener('DOMContentLoaded', () => {
// //  adding event listener to the comment form
//     let comment = document.getElementById('commentform')
    
//     comment.addEventListener('submit', (e) => {
//         e.preventDefault()
        
//         addComment(e.target.feedback.value)
//         comment.reset()
//     })

// })


// // renders value of the comment to the dorm
// function addComment (userComment) {
//     let comment = document.createElement('li')
//     comment.textContent = userComment
//     document.getElementById("comment").appendChild(comment)

// }



// // https://api.disneyapi.dev/characters
// //fetching the data from a public api
// async function get () {
//     let disneyObj = await (await fetch("https://api.disneyapi.dev/characters")).json()
    
//     disneyObj["data"].forEach(character => renderCharacter(character))
// }
// get()

// //rendering the data from the public api to the dom

// function renderCharacter (character) {
//     let li = document.createElement('li')
//     li.className= "listcharacters"
//     li.innerHTML = `   
//     <img class="images" src = "${character['imageUrl']}">
//     <h3 class='name'> ${character['name']} </h3>
//     `
//     let form = document.createElement('form')
//     form.id = "users"
//     form.innerHTML = `
//     <label for="fname"><h3>Add a description</h3></label>
//     <input type="text" id="description"  placeholder="Description">
//     <input type="submit" value="Add description">
    
//     `

//     let userDescription = document.createElement('ul')
//     userDescription.id = "userDescription"
//     li.appendChild(form)
//     form.appendChild(userDescription)
    
//     document.getElementById("character-list").appendChild(li)
    
//     //adding event listener for  the description form 
//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         addDescription(e.target.description.value)
//     })
    
    

// }
// // adding the description to the dom
// function addDescription (descriptionValue) {
//     let userDescription = document.createElement('li')
//     userDescription.textContent = descriptionValue
//     document.getElementById('userDescription').appendChild(userDescription)


// }



