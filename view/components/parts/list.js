import { createHTMLElementObj } from "../../../helpers/dom.js"

export function buildList(pokemonArr){

    //build container that doubles as grid for pokemon cards
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['grid', 'grid-col-5', 'gap-5', 'px-5', 'hidden'],
        attributes: [{name: 'id', value: 'listDiv'}]
    })

    for (let index = 0; index < pokemonArr.length; index++) {
        const element = array[index];
        
    }

    return container
}