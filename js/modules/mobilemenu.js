import Menu from "./menu.js";

export default class MobileMenu 
{
  /**
   * @param {string[]} links
   * @param {string} fileExtension
   */
  async GetAnchors(links, fileExtension) 
  {
    const menu = new Menu(links, fileExtension);
    await menu.CreateMenuAsync();
    console.log(menu.GetAnchors());
    return menu.GetAnchors();
  }

  /**
   * @param {string[]} links
   * @param {string} fileExtension
   */
  async createMobileMenuAsync(links, fileExtension) 
  {
    let anchors = await this.GetAnchors(links, fileExtension);
    console.log(anchors);
    const mobilemenu = document.querySelectorAll(".mobilemenu")[0];
    const select = document.createElement("select");
    select.setAttribute("onchange", "location = this.value;");
    //select.setAttribute("placeholder", "Menu");
    //select.style.display = "none";
    for(let i = 0; i < anchors.length; i++)
    {
      if(i === 0)
      {
        let zeroOption = new Option("Menu", "");
        zeroOption.style.display = "none";
        select.appendChild(zeroOption);
      }
      let newOption;
      if(anchors[i].innerText === "inde" || anchors[i].innerText === "index") newOption = new Option("home", anchors[i].href + fileExtension);
      else newOption = new Option(anchors[i].innerText + "t", anchors[i].href + fileExtension);
      select.appendChild(newOption);
    }
    mobilemenu.appendChild(select);
  }
}