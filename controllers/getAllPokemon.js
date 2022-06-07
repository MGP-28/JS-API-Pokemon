import { storePokemon } from "../store/pokemon.js"

export async function getAllPokemon(){

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    for (let index = 1; index <= 151; index++) {
        const url = baseUrl + index
        getPokemonFromAPI(url)
    }
}

async function getPokemonFromAPI(url){

    try{
        const response = await fetch(url)
        const data = await response.json()
        sendPokemonToStorage(data)
    }
    catch (error) {
        console.error('Error: No pokemon found - ', error)
        return
    }
}

function sendPokemonToStorage(pokemonRaw){

    const {name, id, types, stats, sprites} = pokemonRaw
    const pokemon = {
        name: name, id: id, types: types, stats: stats, sprites: sprites
    }

    console.log(pokemon)

    storePokemon(pokemon)
}