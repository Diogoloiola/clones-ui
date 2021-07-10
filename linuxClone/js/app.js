import {menu} from './menu.js'
import {clock} from './clock.js'
import {terminal} from './terminal.js'

document.addEventListener("DOMContentLoaded", function(event) {
    menu.load()
    clock.load()
    terminal.load()
})