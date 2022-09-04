"use strict";

import Menu from "./menu.js"

export default class DesktopMenu extends Menu
{
    #anchors;

    /**
     * @param {string[]} links 
     * @param {string} fileExtension 
     */
    constructor(links, fileExtension)
    {
        super(links, fileExtension);
    }

    async CreateMenuItemsAsync()
    {               
        let Links = this.links;
        let anchors = new Array(Links.length);
        for(let i = 0; i < anchors.length; i++)
        {
            anchors[i] = document.createElement("a");
            anchors[i].href = this.Link = Links[i];
            anchors[i].classList.add("menuitem");
            anchors[i].id = "menuitem" + i;

            let pageNameTextNode;
            if(Links[i] === "index.html") pageNameTextNode = document.createTextNode("sameer rizvi");           
            else 
            {
                //position = position of dot in link
                let position = Links[i].search(this.fileExtension);
                //add text of link name/page name i.e. index, about, etc.
                //this is done by slicing from beginning of link text to just before the dot
                pageNameTextNode = document.createTextNode(Links[i].slice(0,position));
                //slice(start,end) - end not included sp start to just before end
            }
            //add the text to the anchor element
            anchors[i].append(pageNameTextNode);
        }
        this.#anchors = anchors;
    }

    /**
     * @returns Array()
     */
    get MenuItems(){return this.#anchors;}

    /**
     * @param {string} link 
     * @returns string
     */
    set Link(link){return "./" + link;}    
}