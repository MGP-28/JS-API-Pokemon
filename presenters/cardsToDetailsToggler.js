import { qs } from "../helpers/dom.js";
import { getPokemonById } from "../store/pokemon.js";
import { updateValidPokemon } from "./updatePokemon.js";

export function activateDetails(id){
    const pokemon = getPokemonById(id)
    qs('#listDiv').classList.add('hidden')
    updateValidPokemon(pokemon)
}

export function activateCards(){
    qs('#datasheetDiv').classList.add('hidden')
    qs('#messageDiv').classList.add('hidden')
    qs('#listDiv').classList.remove('hidden')
}