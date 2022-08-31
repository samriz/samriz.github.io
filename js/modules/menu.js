"use strict";

export default class Menu
{
    #links;
    #fileExtension;
    #aTags;

    /**
     * @param {string[]} links 
     * @param {string} fileExtension 
     */
    constructor(links, fileExtension)
    {
        this.#links = links;
        this.#fileExtension = fileExtension;
    }

    async CreateMenuItemsAsync()
    {               
        let Links = this.#links;
        let aTags = new Array(Links.length);
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");
            aTags[i].href = this.SetLink(Links[i]);
            aTags[i].classList.add("menuitem");
            aTags[i].id = "menuitem" + i;

            let pageNameTextNode;
            if(Links[i] === "index.html") pageNameTextNode = document.createTextNode("sameer rizvi");           
            else 
            {
                //position = position of dot in link
                let position = Links[i].search(this.#fileExtension);
                //add text of link name/page name i.e. index, about, etc.
                //this is done by slicing from beginning of link text to just before the dot
                pageNameTextNode = document.createTextNode(Links[i].slice(0,position));
                //slice(start,end) - end not included sp start to just before end
            }
            //add the text to the anchor element
            aTags[i].append(pageNameTextNode);
        }
        this.#aTags = aTags;
    }

    /**
     * @returns Array()
     */
    GetMenuItems(){return this.#aTags;}
    GetLinks(){return this.#links;}
    GetFileExtension(){return this.#fileExtension;}

    /**
     * @param {string} link 
     * @returns string
     */
    SetLink(link){return "./" + link;}    
}