import { createHTMLElement, createHTMLElementObj, qs } from '../../../helpers/dom.js'

export function buildMessage(){

    const title = createHTMLElementObj({
        element: 'h1',
        textContent: '',
        classes: ['w-full', 'text-center', 'text-3xl', 'font-bold', 'py-14', 'flex', 'justify-center', 'gap-5'],
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

export function messageSuccess(){
    const message = qs('#message')
    message.textContent = ''

    const icon = createHTMLElementObj({
        element: 'img',
        attributes: [{name: 'src', value: './assets/img/pokeball.png'}],
        classes: ['w-10']
    })
    message.appendChild(icon)

    const span = createHTMLElement('span', 'Pokemon Found!')
    message.appendChild(span)

    message.classList.add('found-animation')
    setTimeout(()=>{
        message.classList.remove('found-animation')
    }, 1500)
}

export function messageFail(){
    const message = qs('#message')
    message.textContent = ''

    const span = createHTMLElement('span', 'No Pokemon Found!')
    message.appendChild(span)

    message.classList.add('error-animation')
    message.classList.add('w-1/2')
    setTimeout(()=>{
        message.classList.remove('error-animation')
        message.classList.remove('w-1/2')
    }, 1500)
}