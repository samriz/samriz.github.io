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

        // amount of anchor tags == amount of links
        this.#aTags = new Array(this.#links.length);
    }
    
    SetLink(link){return "./" + link;}

    async CreateMenuAsync()
    {
        //var menu = document.getElementsByClassName("menu");
        //var menu = document.querySelector(".menu");

        //any CSS selector can be used
        //either document.querySelectorAll below can be used
        //const menu = document.querySelectorAll(".menu");
        const menu = document.querySelectorAll(".menu");

        // amount of anchor tags == amount of links
        
        const Links = this.#links;

        //create anchor elements i.e. <a></a>
        for(let i = 0; i < this.#aTags.length; i++)
        {
            this.#aTags[i] = document.createElement("a");

            //set anchor element attributes below:
            //set link here i.e. add "./" to front of links
            this.#aTags[i].setAttribute("href", this.SetLink(Links[i]));
            //this.#aTags[i].setAttribute("class", "menuitem");
            this.#aTags[i].classList.add("menuitem");
            this.#aTags[i].setAttribute("id", "menuitem" + i);

            let pageNameTextNode;
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
            //this.#aTags[i].appendChild(pageNameTextNode);  
            //console.log(this.#aTags);
            this.#aTags[i].append(pageNameTextNode);
            //console.log(this.#aTags);      
        }
        //Menu.item(i).innerHTML += " ";
        let aT = this.#aTags;
        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor elements
            for(let j = 0; j < aT.length; j++)
            {
                //add anchor element to menu nav element
                menu.item(i).appendChild(aT[j]);

                //add vertical line between links in menu/nav
                if(j != aT.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        //return Promise.resolve(menu);
        return menu;
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

        const Links = this.#links;

        //create anchor elements i.e. <a></a>
        for(let i = 0; i < this.#aTags.length; i++)
        {
            this.#aTags[i] = document.createElement("a");

            //set anchor element attributes below:
            //set link here i.e. add "./" to front of links
            this.#aTags[i].setAttribute("href", this.SetLink(Links[i]));
            //this.#aTags[i].setAttribute("class", "menuitem");
            this.#aTags[i].classList.add("menuitem");
            this.#aTags[i].setAttribute("id", "menuitem" + i);

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
            //this.#aTags[i].appendChild(pageNameTextNode);  
            this.#aTags[i].append(pageNameTextNode);              
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor elements
            for(let j = 0; j < this.#aTags.length; j++)
            {
                //add anchor element to menu nav element
                menu.item(i).appendChild(this.#aTags[j]);

                //add vertical line between links in menu/nav
                if(j != this.#aTags.length-1) menu.item(i).innerHTML += " | ";
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

    GetAnchors(){return this.#aTags;}
}

//export default Menu;