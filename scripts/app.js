import toggleMenu from "./menu.js";
import toggleSearch from "./search.js";
import getNews from './api.js';
 
function main () {
    toggleMenu();
    toggleSearch();
    getNews();
}

document.addEventListener('DOMContentLoaded', main)