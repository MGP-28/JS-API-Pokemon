import { buildDatasheet } from "../parts/datasheet.js"
import { buildForm } from "../parts/form.js"
import { buildList } from "../parts/list.js"
import { buildMessage } from "../parts/message.js"
import { buildTitle } from "../parts/title.js"

export function buildUI(){
    const app = document.querySelector('#app')
    //build title
    app.appendChild(buildTitle())
    //build form
    app.appendChild(buildForm())
    //build confirmation message
    app.appendChild(buildMessage())
    //build datasheet
    app.appendChild(buildDatasheet())
    //build 1st gen pokemon list
    app.appendChild(buildList())
}