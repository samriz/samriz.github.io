"use strict";

import Menu from "./menu.js";

export default class MobileMenu 
{
    #dropdown;
    #hamburgerMenu;

  /**
   * @param {string[]} links
   * @param {string} fileExtension
   * @returns Array()
   */
  async GetMenuItemsAsync(links, fileExtension) 
  {
      const menu = new Menu(links, fileExtension);
      await menu.CreateMenuItemsAsync();
      //console.log(menu.GetMenuItems());
      return menu.GetMenuItems();
  }

  /**
   * @param {string[]} links
   * @param {string} fileExtension
   */
  async CreateDropdownMenuAsync(links, fileExtension) 
  {
      let anchors = await this.GetMenuItemsAsync(links, fileExtension);
      console.log(anchors);

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
  async CreateHamburgerMenuAsync(links, fileExtension)
  {
        let anchors = await this.GetMenuItemsAsync(links, fileExtension);
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
  GetDropdownMenu(){return this.#dropdown;}
  
  /**
   * @returns HTMLUListElement
   */
  GetHamburgerMenu(){return this.#hamburgerMenu;}
}