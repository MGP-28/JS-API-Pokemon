//import { getPokemon } from '../../../controllers/getPokemonSearch.js'
import { createHTMLElementObj, qs } from '../../../helpers/dom.js'
import { filterCards, showAllCards } from '../../../presenters/filterCards.js'


export function buildForm(){

    //
    //build text input element
    //
    const textInput = createHTMLElementObj({
        element: 'input',
        classes: ['text-black', 'border', 'rounded', 'border-gray-500', 'p-2'],
        attributes: [{name: 'type', value: 'text'}, {name: 'placeholder', value: 'Search by name or ID'}, {name: 'id', value: 'textInput'}]
    })

    textInput.addEventListener('keyup', (e) => {
        if(e.target.value == '') {
            showAllCards()
            return
        }
    })

    //
    //build search element
    //
    const btnSearch = createHTMLElementObj({
        element: 'input',
        classes: ['h-3/4', 'border', 'rounded', 'border-gray-500', 'px-4', 'bg-purple-500', 'text-sm', 'font-semibold', 'hover:border-white'],
        attributes: [{name: 'value', value: 'Search'}, {name: 'type', value: 'submit'}, {name: 'id', value: 'btnSearch'}]
    })
    btnSearch.addEventListener('click', (e) => {
        searching(true)
    })
    btnSearch.addEventListener('searchCompleted', (e) => {
        searching(false)
    })

    //
    //build form
    //
    const form = createHTMLElementObj({
        element: 'form',
        classes: ['flex', 'items-center', 'gap-5'],
        attributes: [{name: 'action', value: ' '}, {name: 'onSubmit', value: 'return false'}],
        itemsToAppend: [textInput, btnSearch]
    })

    //
    // Logic for submit event
    //
    form.addEventListener('submit', (e) => { 
        //get text input element
        const searchInput = qs('#textInput')
        const searchInputValue = searchInput.value
        //case text input is empty
        if(!searchInputValue){
            const classes = ['border-red-500', 'error-animation']
            classes.forEach(element => {
                searchInput.classList.add(element)
            });
            setTimeout(() => {
                classes.forEach(element => {
                    searchInput.classList.remove(element)
                });
            }, 2000);
            searching(false)
            return
        }
        //pass data to presenter to filter
        const contCards = filterCards(searchInputValue.toLowerCase())       
    })
    //build container
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'justify-center'],
        itemsToAppend: [form]
    })
    
    return container
}

function searching(bool){
    const btnSearch = qs('#btnSearch')
    if(bool) { 
        btnSearch.value = 'Searching...'; 
        qs('#datasheetDiv').classList.add('hidden')
        qs('#messageDiv').classList.add('hidden')
    }
    else { 
        btnSearch.value = 'Search'; 
    }
}