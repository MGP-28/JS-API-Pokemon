import { buildPokemonList } from "../presenters/loadPokemonCards.js"
import { updateFailedPokemon } from "../presenters/updatePokemon.js"
import { storePokemon } from "../store/pokemon.js"

export function getAllPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
    fetch(url)
    .then(response => response.json())
    //get each pokemon's data and store it
    .then(data => {
        let promises = []
    
        data.results.forEach(pokemonRaw => {
            const promise = fetch(pokemonRaw.url)
            promises.push(promise)
        });

        Promise.all(promises)
        .then((values) => {
            console.log(values)
            getEachPokemon(values)
        })
    })
    //if response if empty (e.g. not found), catches
    .catch( (error) => {
        updateFailedPokemon()
        console.error('Error: No pokemon found - ', error)
    })
}

function getEachPokemon(pokemonListRaw){

    pokemonListRaw.forEach(pokemonData => {
        
        const {name, id, types, stats, sprites} = pokemonData
        const pokemon = {
            name: name, id: id, types: types, stats: stats, sprites: sprites
        }
        
        console.log(pokemonData)

        storePokemon(pokemon)

    })

    buildPokemonList()
}