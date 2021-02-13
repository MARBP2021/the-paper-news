import toggleMenu from "./menu.js";
import toggleSearch from "./search.js";
 
function main () {
    toggleMenu();
    toggleSearch();
}

document.addEventListener('DOMContentLoaded', main)