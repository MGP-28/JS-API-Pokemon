import { createHTMLElementObj } from "../../../helpers/dom.js"
import { buildPokemonCard } from "./list/pokemonCard.js"

export function buildList(){

    //build container that doubles as grid for pokemon cards
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['grid', 'grid-col-5', 'gap-5', 'px-5', 'hidden'],
        attributes: [{name: 'id', value: 'listDiv'}]
    })

    container.addEventListener('DataLoaded', (e) => {
        for (let index = 0; index < pokemonArr.length; index++) {
            const pokemonCard = buildPokemonCard(pokemonArr[index])
            container.appendChild(pokemonCard)
        }
    })

    return container
}