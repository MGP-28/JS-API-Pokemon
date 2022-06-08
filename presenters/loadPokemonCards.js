import { qs } from "../helpers/dom.js";
import { getPokemonList } from "../store/pokemon.js";
import { buildPokemonCard } from "../view/components/parts/list/pokemonCard.js";



export function buildPokemonList(){

    //get pokemon list from Store
    const pokemonList = getPokemonList()

    //build each pokemon card and insert them into UI
    const pokemonListEl = qs('#listDiv')
    for (let index = 0; index < pokemonList.length; index++) {
        const pokemonCard = buildPokemonCard(pokemonList[index])
        pokemonListEl.appendChild(pokemonCard)
    }
}