import { qs } from "../helpers/dom.js";
import { getPokemonList } from "../store/pokemon.js";
import { buildPokemonCard } from "../view/components/parts/list/pokemonCard.js";



export function buildPokemonList(){

    //store pokemon list on store array
    const pokemonList = getPokemonList()

    //insert pokemon cards into UI
    const pokemonListEl = qs('#listDiv')
    for (let index = 0; index < pokemonList.length; index++) {
        const pokemonCard = buildPokemonCard(pokemonList[index])
        pokemonListEl.appendChild(pokemonCard)
    }
}