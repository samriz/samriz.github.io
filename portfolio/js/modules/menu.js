"use strict";

export default class Menu
{
    #links;
    #fileExtension;
    constructor(links, fileExtension)
    {
        this.#links = links;
        this.#fileExtension = fileExtension;
    }
    
    SetLink(link){return "./" + link;}

    CreateMenuAsync()
    {
        //var menu = document.getElementsByClassName("menu");
        //var menu = document.querySelector(".menu");

        //any CSS selector can be used
        //either document.querySelectorAll below can be used
        //const menu = document.querySelectorAll(".menu");
        const menu = document.querySelectorAll("nav");

        // amount of anchor tags == amount of links
        const aTags = new Array(this.#links.length);
        const Links = this.#links;

        //create anchor elements i.e. <a></a>
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set anchor element attributes below:
            //set link here i.e. add "./" to front of links
            aTags[i].setAttribute("href", this.SetLink(Links[i]));
            //aTags[i].setAttribute("class", "menuitem");
            aTags[i].classList.add("menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);

            var pageNameTextNode;
            if(Links[i] === "index.html") 
            {
                pageNameTextNode = document.createTextNode("sameer rizvi");
            }
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
            //aTags[i].appendChild(pageNameTextNode);  
            aTags[i].append(pageNameTextNode);              
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor elements
            for(let j = 0; j < aTags.length; j++)
            {
                //add anchor element to menu nav element
                menu.item(i).appendChild(aTags[j]);

                //add vertical line between links in menu/nav
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return Promise.resolve(menu);
    }
    
    async PopulateDocumentWithMenuAsync()
    {
        for(let link in this.#links)
        {
            this.#links[link] += this.#fileExtension;
        }
        await this.CreateMenuAsync(); //waiting on Promise object
    }

    CreateMenu()
    {
        //var menu = document.getElementsByClassName("menu");
        //var menu = document.querySelector(".menu");

        //any CSS selector can be used
        //either document.querySelectorAll below can be used
        //const menu = document.querySelectorAll(".menu");
        const menu = document.querySelectorAll("nav");

        // amount of anchor tags == amount of links
        const aTags = new Array(this.#links.length);
        const Links = this.#links;

        //create anchor elements i.e. <a></a>
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set anchor element attributes below:
            //set link here i.e. add "./" to front of links
            aTags[i].setAttribute("href", this.SetLink(Links[i]));
            //aTags[i].setAttribute("class", "menuitem");
            aTags[i].classList.add("menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);

            var pageNameTextNode;
            if(Links[i] === "index.html") 
            {
                pageNameTextNode = document.createTextNode("sameer rizvi");
            }
            else 
            {
                //position = dot's position in link
                let position = Links[i].search(this.#fileExtension);

                //add text of link name/page name i.e. index, about, etc.
                //this is done by slicing from beginning of link text to just before the dot
                pageNameTextNode = document.createTextNode(Links[i].slice(0,position));
            }
            //add the text to the anchor element
            //aTags[i].appendChild(pageNameTextNode);  
            aTags[i].append(pageNameTextNode);              
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor elements
            for(let j = 0; j < aTags.length; j++)
            {
                //add anchor element to menu nav element
                menu.item(i).appendChild(aTags[j]);

                //add vertical line between links in menu/nav
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return menu;
    }
    
    PopulateDocumentWithMenu()
    {
        for(let link in this.#links)
        {
            this.#links[link] += this.#fileExtension;
        }
        return this.CreateMenu(); //return menu to browser/document
    }  
}

//export default Menu;