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
    for(let i = 0; i < anchors.length; i++)
    {
      if(i === 0)
      {
        let zeroOption = new Option("Menu", "");
        zeroOption.style.display = "none";
        select.appendChild(zeroOption);
      }
      let newOption = new Option(anchors[i].innerText, anchors[i].href + fileExtension);
      select.appendChild(newOption);
    }
    mobilemenu.appendChild(select);
  }
}