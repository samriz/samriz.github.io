"use strict";
import Menu from "./modules/menu.js";
import MobileMenu from "./modules/mobilemenu.js";

var links = new Array("index", "about", "contact");
let nav = document.getElementsByTagName("nav")[0];

if(window.visualViewport.width < 500)
{    
    if(nav.classList.contains("menu")) nav.classList.replace("menu", "mobilemenu");
    const mobilemenu = new MobileMenu();
    mobilemenu.createMobileMenuAsync(links, ".html");
}
else
{
    if(nav.classList.contains("mobilemenu")) nav.classList.replace("mobilemenu", "menu");
    const menu = new Menu(links, ".html");
    await menu.PopulateDocumentWithMenuAsync();
    //console.log(m.GetAnchors());
}
