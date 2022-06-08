import { appendElements, createHTMLElement, createHTMLElementObj, qs } from '../../../helpers/dom.js'
import { buildBackButton } from './list/backButton.js'

export function buildMessage(){
    //base message element (no information in it)

    const title = createHTMLElementObj({
        element: 'h1',
        textContent: '',
        classes: ['w-full', 'text-3xl', 'font-bold', 'py-14', 'flex', 'justify-center', 'gap-5'],
        attributes: [{name: 'id', value: 'message'}]
    })
    
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'justify-center', 'items-center', 'py-5', 'hidden'],
        attributes: [{name: 'id', value: 'messageDiv'}],
        itemsToAppend: [title]
    })
    
    return container
}

export function messageSuccess(){
    //resets message's text
    //builds and inserts success message:
    //pokeball icon + text + "return to list" button
    //element gets a short animation, return button is hidden while the animation lasts

    messageReset()

    const icon = createHTMLElementObj({
        element: 'img',
        attributes: [{name: 'src', value: './assets/img/pokeball.png'}],
        classes: ['w-10']
    })

    const span = createHTMLElement('span', 'Pokemon Found!')

    const button = buildBackButton()

    appendElements(message, [icon, span, button])

    message.classList.add('found-animation')
    setTimeout(()=>{
        message.classList.remove('found-animation')
    }, 1500)
}

export function messageFail(){
    //resets message's text
    //displays only a text element
    //short animation used

    messageReset()

    const span = createHTMLElement('span', 'No Pokemon Found!')
    message.appendChild(span)

    message.classList.add('error-animation')
    message.classList.add('w-1/2')
    setTimeout(()=>{
        message.classList.remove('error-animation')
        message.classList.remove('w-1/2')
    }, 1500)
}

function messageReset(){
    const message = qs('#message')
    message.textContent = ''
}