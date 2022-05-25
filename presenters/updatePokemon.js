import { qs } from "../helpers/dom.js"
import { capitalizeFirstLetter } from "../helpers/string.js"

export function updatePokemon(data){
    activateInfo()
    if(!isPokemonValid(data)) return
    const {name, id, types, stats, sprites} = data

    qs('#pokemon-name').textContent = capitalizeFirstLetter(name)

    qs('#pokemon-id').textContent = id

    const pokemon_type = qs('#pokemon-types')
    pokemon_type.textContent = ''
    for (let index = 0; index < types.length; index++) {
        const typeName = capitalizeFirstLetter(types[index].type.name)
        pokemon_type.textContent = pokemon_type.textContent + typeName
        if(index != types.length-1) pokemon_type.textContent = pokemon_type.textContent + ' / '
    }

    console.log(stats) //stats->obj->number/stat->name
    qs('#pokemon-hp').textContent = stats[0].base_stat
    qs('#pokemon-attack').textContent = stats[1].base_stat
    qs('#pokemon-defense').textContent = stats[2].base_stat
    qs('#pokemon-special-attack').textContent = stats[3].base_stat
    qs('#pokemon-special-defense').textContent = stats[4].base_stat
    qs('#pokemon-speed').textContent = stats[5].base_stat
}

function activateInfo(){
    const datasheet = qs('#datasheetDiv')
    if(datasheet.classList.contains('hidden')) {
        datasheet.classList.remove('hidden')
    }
}

function isPokemonValid(data){
    if(data === 'Fail') return false
    return true
}