import { createHTMLElementObj } from '../../../helpers/dom.js'

export function buildMessage(){

    const title = createHTMLElementObj({
        element: 'h1',
        textContent: 'TESTING!',
        classes: ['text-3xl', 'font-bold', 'py-20'],
        attributes: [{name: 'id', value: 'textToShow'}]
    })
    
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'justify-center'],
        itemsToAppend: [title]
    })
    
    return container
}