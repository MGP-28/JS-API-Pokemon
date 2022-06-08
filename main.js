import { getAllPokemon } from './controllers/getAllPokemon.js'
import { classesHTMLtoJsArray } from './helpers/classesHTMLtoJSArray.js'
import { buildUI } from './presenters/baseUI.js'

//debug / tools
classesHTMLtoJsArray('')

//fetch 1st gen pokemon from API and store them
getAllPokemon()

//build all UI elements/components
buildUI()