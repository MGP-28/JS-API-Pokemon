import { qs } from "../helpers/dom.js"
import { storePokemon } from "../store/pokemon.js"

export async function getAllPokemon(){

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    //build all links to fetch (by ID)
    const urls = []

    for (let index = 1; index <= 151; index++) {
        const url = baseUrl + index
        urls.push(url)
    }

    //get all pokemons from API
    const pokemonListRaw = await getPokemonsFromAPI(urls)

    //cycle each pokemon json, get their relevant info and store it
    pokemonListRaw.forEach(json => {
        sendPokemonToStorage(json)
    });

    //after all pokemons are stored, dispatch event to list to build cards
    const dataLoadedEvent = new Event('Data Loaded')
    qs('#listDiv').dispatchEvent(dataLoadedEvent)
}

async function getPokemonsFromAPI(urls) {

    const responses = await Promise.all(urls.map(url => fetch(url)))
    const jsons = await Promise.all(responses.map(response => response.json()))
    return jsons
  }

function sendPokemonToStorage(pokemonRaw){

    const {name, id, types, stats, sprites} = pokemonRaw
    const pokemon = {
        name: name, id: id, types: types, stats: stats, sprites: sprites
    }

    storePokemon(pokemon)
}