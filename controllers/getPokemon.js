import { updateValidPokemon, updateFailedPokemon } from "../presenters/updatePokemon.js"

export function getPokemon(searchTerm){
    const url = 'https://pokeapi.co/api/v2/pokemon/'+searchTerm
    fetch(url)
    .then(response => response.json())
    //if response if empty (e.g. not found), catches
    .catch( (error) => {
        updateFailedPokemon()
        console.error('Error: No pokemon found - ', error)
        return
    })
    //if data has 
    .then(data => {
        if(data) updateValidPokemon(data)
    })
}