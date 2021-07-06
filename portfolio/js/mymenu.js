"use strict";
/* import PopulateFileWithMenuAsync from "./modules/menu.js"
PopulateFileWithMenuAsync(".html"); */

import Menu from "./modules/menu.js"

var links = new Array("index", "about", "contact");
/* const m = new Menu(links, ".html");
m.PopulateFileWithMenu(); */

new Menu(links, ".html").PopulateFileWithMenu();