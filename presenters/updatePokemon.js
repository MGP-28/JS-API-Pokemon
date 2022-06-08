import { createHTMLElementObj, qs } from "../helpers/dom.js"
import { capitalizeFirstLetter } from "../helpers/string.js"
import { getPokemonTypeColor } from "../store/pokemon.js"
import { messageFail, messageSuccess } from "../view/components/parts/message.js"

export function finishedSearch(){
    //calls button event and search end
    const event = new Event('searchCompleted')
    qs('#btnSearch').dispatchEvent(event)
}

export function updateFailedPokemon(){
    //only shows message portion of UI with an error message

    finishedSearch()

    qs('#datasheetDiv').classList.add('hidden')

    qs('#messageDiv').classList.remove('hidden')

    messageFail()

}

export function updateValidPokemon(data){
    //activates message portion of UI with animation
    //after a set time, details will show (called inside "activateMessage()")
    //get relevant info from pokemon data received
    //update each portion of UI with the new relevant data

    finishedSearch()

    activateMessage()

    const {name, id, types, stats, sprites} = data

    updateNameID(name, id)

    updateTypes(types)

    updateStats(stats)

    updateSprites(sprites)
}

function activateMessage(){
    //shows success message and, after animation ends, the detail section

    const messageDiv = qs('#messageDiv')
    messageDiv.classList.remove('hidden')
    messageSuccess()
    setTimeout(()=>{
        activateInfo()
    }, 1500)
}

function activateInfo(){
    //if details' data section is hidden, show it along with "back" button

    const datasheet = qs('#datasheetDiv')
    const backButton = qs('#backBtn')
    if(datasheet.classList.contains('hidden')) {
        datasheet.classList.remove('hidden')
        backButton.classList.remove('hidden')
    }
}

function updateNameID(name, id){
    //get name element on detail section and replace it
    qs('#pokemon-name').textContent = capitalizeFirstLetter(name)
    qs('#pokemon-id').textContent = id
}

function updateTypes(types){
    //get pokemon types DOM element
    const pokemon_type = qs('#pokemon-types')
    //reset content of element to empty
    pokemon_type.textContent = ''
    //build slash that separates each type entry (to be used inside for loop)
    const seperatingBar = createHTMLElementObj({
        element: 'span',
        textContent: ' / '
    })
    //cycle types received from API
    for (let index = 0; index < types.length; index++) {
        //get name of type, capitalize first letter
        const typeName = capitalizeFirstLetter(types[index].type.name)
        //get color of said type, stored in store/pokemon.js
        const typeColor = getPokemonTypeColor(typeName)
        //build a span element for each type
        const spanType = createHTMLElementObj({
            element: 'span',
            textContent: typeName,
            attributes: [{name: 'style', value: `background-color:${typeColor}`}],
            classes: ['p-1', 'px-3', 'drop-shadow-2xl', 'shadow-white']
        })
        //append type span element to main type element
        pokemon_type.appendChild(spanType)
        //if is not the last element, add slash element to end
        if(index != types.length-1) pokemon_type.appendChild(seperatingBar)
    }
}

function updateStats(stats){
    /*  stats array order from API:
    *   HP - Attack - Defense - Special-Attack - Special-Defense - Speed
    */  
    qs('#pokemon-hp').textContent = stats[0].base_stat
    qs('#pokemon-attack').textContent = stats[1].base_stat
    qs('#pokemon-defense').textContent = stats[2].base_stat
    qs('#pokemon-special-attack').textContent = stats[3].base_stat
    qs('#pokemon-special-defense').textContent = stats[4].base_stat
    qs('#pokemon-speed').textContent = stats[5].base_stat
}

function updateSprites(sprites){
    qs('#sprite-default').setAttribute('src', sprites['front_default'])
    qs('#sprite-shiny').setAttribute('src', sprites['front_shiny'])
}