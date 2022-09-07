"use strict";

import DesktopMenu from "./modules/desktopmenu.js";
import MobileMenu from "./modules/mobilemenu.js";

const links = new Array("index", "about", "contact");
const nav = document.getElementsByTagName("nav")[0];

const menu = new DesktopMenu(links, ".html");
const mobilemenu = new MobileMenu(menu.Links, menu.FileExtension);

await CreateMenu(menu);
//await CreateDropdownMenu(menu);
await CreateHamburgerMenu(menu);
await viewportResize();
window.onresize = viewportResize;
$("#hamburgerList").hide();
document.getElementById("hamburgerButton").addEventListener("click", () => {
    if ($("#hamburgerList").is(":visible")) $("#hamburgerList").hide();
    else $("#hamburgerList").show();
});

async function viewportResize()
{
    if(window.visualViewport.width <= 640)
    {    
        if(nav.classList.contains("menu")) nav.classList.replace("menu", "mobilemenu");
        $("#divMenuItems").hide();
        $("#divMobileMenuItems").show();
        $("#hamburgerList").hide();
    }
    else
    {
        if(nav.classList.contains("mobilemenu")) nav.classList.replace("mobilemenu", "menu");
        $("#divMobileMenuItems").hide();
        $("#divMenuItems").show();   
    }
}

/**
 * @param {DesktopMenu} menu 
 */
async function CreateMenu(menu)
{
    for(let link in menu.Links)
    {
        menu.Links[link] += menu.FileExtension;
    }                
    
    await menu.CreateMenuItemsAsync();

    const newDiv = document.createElement("div");
    newDiv.id = "divMenuItems";

    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newDiv); 
    AddMenuItemsToDocumentAsync(menu);   
}

/**
 * @param {DesktopMenu} menu 
 */
async function CreateDropdownMenu(menu)
{
    const newDiv = document.createElement("div");
    newDiv.id = "divMobileMenuItems";

    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newDiv);

    await mobilemenu.CreateDropdownMenuAsync();
    let selectMobileMenu = mobilemenu.DropdownMenu;
    (document.getElementById("divMobileMenuItems")).appendChild(selectMobileMenu);
}

async function CreateHamburgerMenu()
{
    const newDiv = document.createElement("div");
    newDiv.id = "divMobileMenuItems";

    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newDiv);

    await mobilemenu.CreateHamburgerMenuAsync();
    let hamburger = mobilemenu.HamburgerMenu;

    const button = document.createElement("button");
    button.id = "hamburgerButton";
    button.classList.add("nav-toggle");
    document.getElementById("divMobileMenuItems").appendChild(button);

    const i = document.createElement("i");
    i.id = "hamburgerITag";
    i.classList.add("fas");
    i.classList.add("fa-bars");

    document.getElementById("hamburgerButton").appendChild(i);
    document.getElementById("divMobileMenuItems").appendChild(hamburger);
}

/**
 * @param {DesktopMenu} menu 
 */
async function AddMenuItemsToDocumentAsync(menu)
{    
    let divMenuItems = document.querySelectorAll("#divMenuItems");
    //place a vertical line between each menu item
    for(let i = 0; i < divMenuItems.length; i++)
    {
        for(let j = 0; j < menu.MenuItems.length; j++)
        {
            //add anchor element to menu nav element
            //menu.item(i).appendChild(aT[j]);
            divMenuItems[i].appendChild(menu.MenuItems[j]);
            //add vertical line between links in menu/nav
            if (j != menu.MenuItems.length - 1) divMenuItems[i].innerHTML += " | ";
        }            
    }
}

function MobileMenuFocusIn()
{
    this.style.borderColor = "rgb(145,194,247)";
    this.style.borderWidth = "2px";
}

function MobileMenuFocusOut()
{
    this.style.borderColor = "black";
    this.style.borderWidth = "1px";
}