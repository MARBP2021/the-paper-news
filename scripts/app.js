import toggleMenu from "./menu.js";
import toggleSearch from "./search.js";
import {Api} from './api.js';
 
function main () {
    toggleMenu();
    toggleSearch();
    Api();
}

document.addEventListener('DOMContentLoaded', main)