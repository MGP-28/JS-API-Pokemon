import { getAllPokemon } from './controllers/getAllPokemon.js'
import { classesHTMLtoJsArray } from './helpers/classesHTMLtoJSArray.js'
import { buildUI } from './presenters/baseUI.js'

//debug / tools
classesHTMLtoJsArray('')

getAllPokemon()

buildUI()