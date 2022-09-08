async function get () {
    let disneyObj = await (await fetch("https://api.disneyapi.dev/characters")).json()
    console.log(disneyObj)
    
    disneyObj["data"].forEach(character => renderMeme(character))
}
get()