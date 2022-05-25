import { updatePokemon } from "../presenters/updatePokemon.js"

export function getPokemon(searchTerm){
    const url = 'https://pokeapi.co/api/v2/pokemon/'+searchTerm
    fetch(url)
    .then(response => response.json())
    .then(data => updatePokemon(data))
    .catch( (error) => {
        updatePokemon('Fail')
        console.error('Error:', error)
    })
}