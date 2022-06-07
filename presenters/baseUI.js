import { getPokemonList, sortPokemonId } from "../store/pokemon.js"
import { buildDatasheet } from "../view/components/parts/datasheet.js"
import { buildForm } from "../view/components/parts/form.js"
import { buildList } from "../view/components/parts/list.js"
import { buildMessage } from "../view/components/parts/message.js"
import { buildTitle } from "../view/components/parts/title.js"

export function buildUI(){
    const app = document.querySelector('#app')
    //build title
    app.appendChild(buildTitle())
    //build form
    app.appendChild(buildForm())
    //build confirmation message
    app.appendChild(buildMessage())
    //build datasheet
    app.appendChild(buildDatasheet())
    //build 1st gen pokemon list
    sortPokemonId()
    const pokemonList = getPokemonList()
    app.appendChild(buildList(pokemonList))
}