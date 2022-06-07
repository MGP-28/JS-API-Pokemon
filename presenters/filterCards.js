import { qs } from "../helpers/dom.js";
import { getPokemonById } from "../store/pokemon.js";
import { updateFailedPokemon, updateValidPokemon } from "./updatePokemon.js";

export function filterCards(searchTerm){

    qs('#messageDiv').classList.add('hidden')

    const listEl = qs('#listDiv')
    let cont = 0
    listEl.childNodes.forEach(card => {
        const name = qs('h2', card).textContent.toLowerCase()
        if(name.includes(searchTerm)) { card.classList.remove('hidden'); cont++ }
        else card.classList.add('hidden')
    });
    switch (cont) {
        case 0:
            updateFailedPokemon()
            break;
        case 1:{
            const el = listEl.querySelector('div:not(.hidden)')
            const id = el.getAttribute('pokemonid')
            const pokemon = getPokemonById(id)
            updateValidPokemon(pokemon)
            qs('#listDiv').classList.add('hidden')
            break;
        }
        default:
            break;
    }
}

export function showAllCards(){
    
    qs('#messageDiv').classList.add('hidden')
    
    const listEl = qs('#listDiv')
    listEl.childNodes.forEach(card => {
        card.classList.remove('hidden')
    });
}