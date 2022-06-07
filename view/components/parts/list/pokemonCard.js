import { capitalizeFirstLetter } from "../../../../helpers/string.js"
import { createHTMLElementObj } from "../../../../helpers/dom.js"

export function buildPokemonCard(pokemon){

    //build sprite
    const sprite = createHTMLElementObj({
        element: 'img',
        attributes: [{name: 'src', value: '#'}, {name: 'id', value: 'sprite-default'}]
    })

    //build title
    const title = createHTMLElementObj({
        element: 'h2', 
        textContent: capitalizeFirstLetter(pokemon['name']),
        classes: ['text-center', 'text-xl', 'font-semibold']
    })

    //build card container
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['h-28', 'w-28', 'bg-gray-500', 'rounded', 'flex', 'justify-center', 'items-center'],
        attributes: [{name: 'pokemonId', value: pokemon['id']}],
        itemsToAppend: [sprite, title]
    })

    return container
}