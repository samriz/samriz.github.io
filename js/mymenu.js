"use strict";

import Menu from "./modules/menu.js";
import MobileMenu from "./modules/mobilemenu.js";

const links = new Array("index", "about", "contact");
const nav = document.getElementsByTagName("nav")[0];

const mobilemenu = new MobileMenu();
const menu = new Menu(links, ".html");

await CreateMenu(menu);
await CreateMobileMenu(menu);
await viewportResize();
window.onresize = viewportResize;
document.getElementById("selectMobileMenu").addEventListener("focusin", MobileMenuFocusIn);
document.getElementById("selectMobileMenu").addEventListener("focusout", MobileMenuFocusOut);

function MobileMenuFocusIn()
{
    this.style.borderColor =
      "rgb(145,194,247)";
      this.style.borderWidth = "2px";
}

function MobileMenuFocusOut()
{
    this.style.borderColor = "black";
    this.style.borderWidth = "1px";
}

async function viewportResize()
{
    if(window.visualViewport.width < 640)
    {    
        if(nav.classList.contains("menu")) nav.classList.replace("menu", "mobilemenu");
        $("#divMenuItems").hide();
        $("#divMobileMenuItems").show();
        
    }
    else
    {
        if(nav.classList.contains("mobilemenu")) nav.classList.replace("mobilemenu", "menu");
        $("#divMobileMenuItems").hide();
        $("#divMenuItems").show();   
    }
}

/**
 * @param {Menu} menu 
 */
async function CreateMenu(menu)
{
    for(let link in menu.GetLinks())
    {
        menu.GetLinks()[link] += menu.GetFileExtension();
    }                
    
    await menu.CreateMenuItemsAsync();

    const newDiv = document.createElement("div");
    newDiv.id = "divMenuItems";

    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newDiv); 
    AddMenuItemsToDocumentAsync(menu);   
}

/**
 * @param {Menu} menu 
 */
async function CreateMobileMenu(menu)
{
    const newDiv = document.createElement("div");
    newDiv.id = "divMobileMenuItems";

    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newDiv);

    let selectMobileMenu = await mobilemenu.CreateMobileMenuSelectAsync(menu.GetLinks(), menu.GetFileExtension());
    (document.getElementById("divMobileMenuItems")).appendChild(selectMobileMenu);
}

/**
 * @param {Menu} menu 
 */
async function AddMenuItemsToDocumentAsync(menu)
{    
    let divMenuItems = document.querySelectorAll("#divMenuItems");
    //place a vertical line between each menu item
    for(let i = 0; i < divMenuItems.length; i++)
    {
        for(let j = 0; j < menu.GetMenuItems().length; j++)
        {
            //add anchor element to menu nav element
            //menu.item(i).appendChild(aT[j]);
            divMenuItems[i].appendChild(menu.GetMenuItems()[j]);
            //add vertical line between links in menu/nav
            if (j != menu.GetMenuItems().length - 1) divMenuItems[i].innerHTML += " | ";
        }            
    }
}