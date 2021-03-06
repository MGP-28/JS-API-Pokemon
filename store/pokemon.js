//stores pokemon data (each entry, 1 pokemon). Ordered by pokemon ID
let pokemonArr = []

//pokemon types and respective color. for UI
const pokemonTypes = [
    {name: 'Normal', color: '#5c5c3b'},
    {name: 'Fire', color: '#bd570d'},
    {name: 'Water', color: '#0f3797'},
    {name: 'Grass', color: '#699e32'},
    {name: 'Electric', color: '#8f7404'},
    {name: 'Ice', color: '#296d6d'},
    {name: 'Fighting', color: '#a92a23'},
    {name: 'Poison', color: '#8d388d'},
    {name: 'Ground', color: '#6e5716'},
    {name: 'Flying', color: '#2b117b'},
    {name: 'Psychic', color: '#2b117b'},
    {name: 'Bug', color: '#93a21d'},
    {name: 'Rock', color: '#a28d32'},
    {name: 'Ghost', color: '#634d86'},
    {name: 'Dark', color: '#634d40'},
    {name: 'Dragon', color: '#3a07ba'},
    {name: 'Steel', color: '#363650'},
    {name: 'Fairy', color: '#5f141c'},
    {name: 'Shadow', color: '#634d86'},
    {name: '???', color: '#50857b'}
]

//receives type, returns respective color from stored array
export function getPokemonTypeColor(type){
    return pokemonTypes.find(el => el.name == type).color
}

//receives pokemon, stores it into array
export function storePokemon(pokemon){
    pokemonArr.push(pokemon)
}

//return full pokemon array
export function getPokemonList(){
    return pokemonArr
}

//receives ID, returns pokemon from array with respective ID
export function getPokemonById(id){
    return pokemonArr[id-1]
}