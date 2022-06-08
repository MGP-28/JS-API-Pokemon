import { createHTMLElementObj } from "../../../helpers/dom.js"
import { buildPokemonCard } from "./list/pokemonCard.js"

export function buildList(pokemonArr){

    //build list with set width
    const list = createHTMLElementObj({
        element: 'div',
        classes: ['w-list', 'flex', 'flex-wrap', 'justify-center', 'gap-5', 'px-5', 'hidden'],
        attributes: [{name: 'id', value: 'listDiv'}]
    })

    list.addEventListener('Data Loaded', (e) => {
        for (let index = 0; index < pokemonArr.length; index++) {
            const pokemonCard = buildPokemonCard(pokemonArr[index])
            list.appendChild(pokemonCard)
        }
        e.target.classList.remove('hidden')
    })


    //build container that doubles as grid for pokemon cards
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['w-full', 'flex', 'justify-center', 'mt-20'],
        itemsToAppend: [list]
    })
    return container
}