import { createHTMLElementObj } from "../../../helpers/dom.js";


export function buildDatasheet(){
    //build data area
    const datasheet = buildData()
    //build sprites area
    const sprites = buildSprites()
    //build container for areas
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['flex', 'flex-col-reverse', 'md:flex-row', 'justify-center', 'items-center', 'gap-5', 'px-5', 'hidden'],
        attributes: [{name: 'id', value: 'datasheetDiv'}],
        itemsToAppend: [datasheet, sprites]
    })

    return container
}

function buildData(){
    //build list items
    ////label + span for value
    const liArr = []
    let labelArr = ['Name', 'ID', 'Types', 'Stats']
    labelArr.forEach(title => {
        //span for each value
        const span = createHTMLElementObj({
            element: 'span',
            attributes:[ {name: 'id', value: `pokemon-${title.toLowerCase()}`} ]
        })
        if(title == 'Types') span.classList.add('text-shadow')
        //li with label and span
        const li = createHTMLElementObj({
            element: 'li',
            textContent: `${title}: `,
            itemsToAppend: [span],
            classes: ['mb-5']
        })
        liArr.push(li)
    });
    ////grid for stats using list
    const statsArr = []
    labelArr = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']
    labelArr.forEach(title => {
        const span = createHTMLElementObj({
            element: 'span',
            attributes:[ {name: 'id', value: `pokemon-${title.toLowerCase().replace(' ', '-')}`} ]
        })
        const li = createHTMLElementObj({
            element: 'li',
            textContent: `${title}: `,
            itemsToAppend: [span]
        })
        statsArr.push(li)
    });
    const statsList = createHTMLElementObj({
        element: 'ul',
        itemsToAppend: statsArr,
        classes: ['grid', 'grid-rows-3', 'grid-cols-2', 'gap-x-3', 'gap-y-1', 'pl-5']
    })
    liArr.push(statsList)

    //build main list
    const ul = createHTMLElementObj({
        element: 'ul',
        itemsToAppend: liArr,
        classes: ['w-3/4', 'md:w-80']
    })

    return ul
}

function buildSprites(){
    //build sprites' divs
    const spriteData = ['sprite-default', 'sprite-shiny']
    const spriteArr = []
    for (let index = 0; index < 2; index++) {
        const sprite = createHTMLElementObj({
            element: 'img',
            attributes: [{name: 'src', value: '#'}, {name: 'id', value: spriteData[index]}]
        })
        const spriteContainer = createHTMLElementObj({
            element: 'div',
            classes: ['h-28', 'w-28', 'bg-gray-500', 'rounded', 'flex', 'justify-center', 'items-center'],
            itemsToAppend: [sprite]
        })
        spriteArr.push(spriteContainer)
    }
    //build container
    const container = createHTMLElementObj({
        element: 'div',
        classes: ['w-full', 'md:w-80', 'flex', 'gap-5', 'justify-center', 'items-center'],
        itemsToAppend: spriteArr
    })
    
    return container
}