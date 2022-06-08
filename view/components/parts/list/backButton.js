import { createHTMLElementObj } from "../../../../helpers/dom.js"
import { activateCards } from "../../../../presenters/cardsToDetailsToggler.js"

export function buildBackButton(){

    //build button
    const button = createHTMLElementObj({
        element: 'button', 
        textContent: '< Back',
        attributes: [{name: 'id', value: 'backBtn'}],
        classes: ['hidden', 'h-8', 'whitespace-nowrap', 'md:absolute', 'btn-back-position', 'border', 'rounded', 'border-gray-500', 'px-4', 'bg-purple-500', 'text-sm', 'font-semibold', 'hover:border-white']
    })

    button.addEventListener('click', (e) => {
        activateCards()
    })

    return button
}