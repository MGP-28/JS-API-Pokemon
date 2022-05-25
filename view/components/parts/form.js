import { getPokemon } from '../../../controllers/getPokemon.js'
import { createHTMLElementObj } from '../../../helpers/dom.js'
//import { updateCenterText } from '../events/updateCenterText.js'


export function buildForm(){

    //build text input element
    const textInput = createHTMLElementObj({
        element: 'input',
        classes: ['text-black', 'border', 'rounded', 'border-gray-500', 'p-2'],
        attributes: [{name: 'type', value: 'text'}, {name: 'placeholder', value: 'Search by name or ID'}]
    })

    //build search element
    const btnSearch = createHTMLElementObj({
        element: 'input',
        classes: ['h-3/4', 'border', 'rounded', 'border-gray-500', 'py-2', 'px-4', 'bg-purple-500', 'text-black', 'text-sm', 'font-semibold', 'hover:border-white'],
        attributes: [{name: 'value', value: 'Search'}, {name: 'type', value: 'submit'}]
    })

    //build form
    const form = createHTMLElementObj({
        element: 'form',
        classes: ['flex', 'items-center', 'gap-5'],
        attributes: [{name: 'action', value: ' '}, {name: 'onSubmit', value: 'return false'}],
        itemsToAppend: [textInput, btnSearch]
    })
    form.addEventListener('submit', (e) => { 
        const searchInput = [...e.target.children].find(input => (input.type == 'text'))
        if(!searchInput.value){
            const classes = ['border-red-500', 'error-animation']
            classes.forEach(element => {
                searchInput.classList.add(element)
            });
            setTimeout(() => {
                classes.forEach(element => {
                    searchInput.classList.remove(element)
                });
            }, 2000);
            return
        }
        getPokemon(searchInput.value)
    })
    //build container
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'justify-center'],
        itemsToAppend: [form]
    })
    
    return container
}