import { updateFailedPokemon } from "../presenters/updatePokemon.js"
import { storePokemonList } from "../store/pokemon.js"

export function getAllPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
    fetch(url)
    .then(response => response.json())
    //if data has results
    .then(data => {
        const pokemonListBase = data.results
        getEachPokemon(pokemonListBase)
    })
    //if response if empty (e.g. not found), catches
    .catch( (error) => {
        updateFailedPokemon()
        console.error('Error: No pokemon found - ', error)
    })
}

function getEachPokemon(pokemonListBase){
    let pokemonListReady = []
    pokemonListBase.forEach(pokemon => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        fetch(url)
        .then(response => response.json())
        //if response if empty (e.g. not found), catches
        .catch( (error) => {
            console.error('Error: No pokemon found - ', error)
        })
        //if data has 
        .then(data => {
            if(data) {
                pokemonListReady.push(data)
            }
        })
    });

    storePokemonList(pokemonListReady)
}