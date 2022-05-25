import { createHTMLElementObj, qs } from "../helpers/dom.js"
import { capitalizeFirstLetter } from "../helpers/string.js"
import { getPokemonTypeColor } from "../store/pokemon.js"

function finishedSearch(){
    const event = new Event('searchCompleted')
    qs('#btnSearch').dispatchEvent(event)
}

export function updateFailedPokemon(){

    finishedSearch()

    qs('#datasheetDiv').classList.add('hidden')

    qs('#messageDiv').classList.remove('hidden')

    const message = qs('#message')
    message.textContent = 'No Pokemon Found!'
    message.classList.add('error-animation')
    message.classList.add('w-1/2')
    setTimeout(()=>{
        message.classList.remove('error-animation')
        message.classList.remove('w-1/2')
    }, 1500)
}

export function updateValidPokemon(data){

    finishedSearch()

    activateMessage()

    const {name, id, types, stats, sprites} = data

    updateNameID(name, id)

    updateTypes(types)

    updateStats(stats)

    updateSprites(sprites)
}

function activateMessage(){
    const messageDiv = qs('#messageDiv')
    const message = qs('#message')
    messageDiv.classList.remove('hidden')
    message.classList.add('found-animation')
    message.textContent = 'Pokemon Found!'
    setTimeout(()=>{
        message.classList.remove('found-animation')
        activateInfo()
    }, 1500)
}

function activateInfo(){
    const datasheet = qs('#datasheetDiv')
    const messageDiv = qs('#messageDiv')
    const message = qs('#message')
    if(datasheet.classList.contains('hidden')) {
        datasheet.classList.remove('hidden')
        messageDiv.classList.remove('hidden')
    }
    message.classList.add('found-animation')
    message.textContent = 'Pokemon Found!'
    setTimeout(()=>{
        message.classList.remove('found-animation')
    }, 1500)
}

function updateNameID(name, id){
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