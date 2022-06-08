import { createHTMLElementObj } from "../../../helpers/dom.js"

export function buildTitle(){
    const title = createHTMLElementObj({
        element: 'h1', 
        textContent: 'Search for a pokemon name or number',
        classes: ['text-center', 'py-20', 'px-10', 'text-3xl', 'font-semibold']
    })
    return title
}