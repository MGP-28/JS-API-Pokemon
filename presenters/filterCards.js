import { qs } from "../helpers/dom.js";
import { getPokemonById } from "../store/pokemon.js";
import { finishedSearch, updateFailedPokemon, updateValidPokemon } from "./updatePokemon.js";

export function filterCardsByName(searchTerm){

    //hides Message portion of UI
    qs('#messageDiv').classList.add('hidden')

    //get List element
    const listEl = qs('#listDiv')
    listEl.classList.remove('hidden')

    //counter for number of results found
    let cont = 0

    //cycles cards and determines if it's a match (show) or not (hide)
    //get name portion of card, checks if it includes the search term
    //forces matches to show, since they could be hidden by a previous search
    listEl.childNodes.forEach(card => {
        const name = qs('h2', card).textContent.toLowerCase()
        if(name.includes(searchTerm)) { card.classList.remove('hidden'); cont++ }
        else card.classList.add('hidden')
    });
    switch (cont) {

        //if no results are found, all cards are hidden (from previous cycle) and shows a message
        case 0:
            updateFailedPokemon()
            break;

        //if 1 result is found, immediately jumps to detailed view of said card 
        //searches list for the card that's not hidden
        //gets pokemonID from card
        //calls store function that returns a pokemon object when giving an ID
        //update all details from received object
        case 1:{
            const el = listEl.querySelector('div:not(.hidden)')
            const id = el.getAttribute('pokemonid')
            const pokemon = getPokemonById(id)
            updateValidPokemon(pokemon)
            qs('#listDiv').classList.add('hidden')
            break;
        }

        //any other case, no actions are necessary at this point
        default:
            break;
    }

    finishedSearch()
}

export function filterCardsById(searchTerm){

    //hides Message portion of UI
    qs('#messageDiv').classList.add('hidden')

    //get List element
    const listEl = qs('#listDiv')
    listEl.classList.remove('hidden')

    //counter for number of results found (1 max, used to see if no results are found)
    let cont = 0

    //cycles cards and determines if it's a match (show) or not (hide)
    //get id attribute of card, checks if it matches the search term
    //forces matches to show, since they could be hidden by a previous search
    listEl.childNodes.forEach(card => {
        const id = card.getAttribute('pokemonid')
        if(id == searchTerm) { 
            const pokemon = getPokemonById(id)
            updateValidPokemon(pokemon)
            qs('#listDiv').classList.add('hidden')
            cont++
        }
        else card.classList.add('hidden')
    });

    //if no result is found, displays corresponding message
    if(cont == 0) updateFailedPokemon()

    finishedSearch()
}

export function showAllCards(){
    
    //hide Details portion of UI
    qs('#messageDiv').classList.add('hidden')
    qs('#datasheetDiv').classList.add('hidden')
    
    //get card list element, shows it and resets all cards in it to also show
    const listEl = qs('#listDiv')
    listEl.classList.remove('hidden')
    listEl.childNodes.forEach(card => {
        card.classList.remove('hidden')
    });
}