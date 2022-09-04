"use strict";

import Menu from "./menu.js";
import DesktopMenu from "./desktopmenu.js";

export default class MobileMenu extends Menu
{
    #dropdown;
    #hamburgerMenu;

    /**
     * @param {string[]} links 
     * @param {string} fileExtension 
     */
    constructor(links, fileExtension)
    {
        super(links, fileExtension);
    }

   /**
    * @param {string[]} links
    * @param {string} fileExtension
    * @returns Array()
    */
   async GetMenuItemsAsync() 
   {
       const desktopmenu = new DesktopMenu(this.links, this.fileExtension);
       await desktopmenu.CreateMenuItemsAsync();
       return desktopmenu.MenuItems;
   }

   /**
    * @param {string[]} links
    * @param {string} fileExtension
    */
   async CreateDropdownMenuAsync() 
   {
        let anchors = await this.GetMenuItemsAsync(this.links, this.fileExtension);
        //console.log(anchors);

        const select = document.createElement("select");
        select.id = "selectMobileMenu";
        select.setAttribute("onchange", "location = this.value;");
        for (let i = 0; i < anchors.length; i++)
        {
            if (i === 0) 
            {
                let zeroOption = new Option("Menu", "");
                zeroOption.style.display = "none";
                select.appendChild(zeroOption);
            }
            let newOption;
            if (anchors[i].innerText === "sameer rizvi") newOption = new Option("home", anchors[i].href);
            else newOption = new Option(anchors[i].innerText, anchors[i].href);

           select.appendChild(newOption);
        }
        select.classList.add("selectMenu");
        this.#dropdown = select;
    }

    /**
     * @param {string[]} links
     * @param {string} fileExtension
     */
    async CreateHamburgerMenuAsync()
    {
        let anchors = await this.GetMenuItemsAsync(this.links, this.fileExtension);
        const listMenu = document.createElement("ul");
        listMenu.id = "hamburgerList";
        for(let i = 0; i < anchors.length; i++)
        {
            let li = document.createElement("li");
            li.appendChild(anchors[i]);
            li.classList.add("hamburgerListItem");
            listMenu.appendChild(li);
        }
        this.#hamburgerMenu = listMenu;
    }

    /**
     * @returns HTMLSelectElement
     */
    get DropdownMenu(){return this.#dropdown;}
  
    /**
     * @returns HTMLUListElement
     */
    get HamburgerMenu(){return this.#hamburgerMenu;}
}