export const createHTMLElement = (itemToCreate, textContent = '', classes = [], attributes = [], itemsAppend = []) => {
    const item = document.createElement(itemToCreate)
    item.textContent = textContent
    applyAttributes(item, attributes)
    applyClasses(item, classes)
    appendElements(item, itemsAppend)
    return item
}

export const createHTMLElementObj = (obj) => {
    const {element, textContent, classes, attributes, itemsToAppend} = obj
    const item = document.createElement(element)
    if(textContent) item.textContent = textContent
    if(attributes) applyAttributes(item, attributes)
    if(classes) applyClasses(item, classes)
    if(itemsToAppend) appendElements(item, itemsToAppend)
    return item
}

export const applyAttributes = (target, attributeArr) => {
    attributeArr.forEach(element => { 
        target.setAttribute(element.name, element.value) 
    })
    return target
}
export const applyClasses = (target, classArr) => {
    classArr.forEach(element => { target.classList.add(element) })
    return target
}
export const appendElements = (target, itemArr) => {
    itemArr.forEach(element => { target.append(element) })
    return target
}

export function qs(term, parent = document){
    return parent.querySelector(term)
}