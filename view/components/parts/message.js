import { createHTMLElementObj } from '../../../helpers/dom.js'

export function buildMessage(){

    const title = createHTMLElementObj({
        element: 'h1',
        textContent: 'TESTING!',
        classes: ['w-full', 'text-center', 'text-3xl', 'font-bold', 'py-14'],
        attributes: [{name: 'id', value: 'message'}]
    })
    
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'justify-center', 'py-5', 'hidden'],
        attributes: [{name: 'id', value: 'messageDiv'}],
        itemsToAppend: [title]
    })
    
    return container
}