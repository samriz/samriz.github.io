"use strict";

export default class Menu
{
    /* links;
    fileExtension; */
    constructor(links, fileExtension)
    {
        this.links = links;
        this.fileExtension = fileExtension;
    }
    
    SetLink(link){return "./" + link;}

    CreateMenuAsync()
    {
        //var menu = document.getElementsByClassName("menu");
        //var menu = document.querySelector(".menu");

        //any CSS selector can be used
        //either document.querySelectorAll below can be used
        //var menu = document.querySelectorAll(".menu");
        var menu = document.querySelectorAll("nav");

        // amount of anchor tags == amount of links
        var aTags = new Array(this.links.length);
        var Links = this.links;

        //create anchor elements i.e. <a></a>
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set anchor element attributes below:
            //set link here i.e. add "./" to front of links
            aTags[i].setAttribute("href", this.SetLink(Links[i]));
            aTags[i].setAttribute("class", "menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);

            var textnode;
            if(Links[i] === "index.html") 
            {
                textnode = document.createTextNode("sameer rizvi");
            }
            else 
            {
                //position = dot's position in link
                var position = Links[i].search(this.fileExtension);

                //add text of link name/page name i.e. index, about, etc.
                //this is done by slicing from beginning of link text to just before the dot
                textnode = document.createTextNode(Links[i].slice(0,position));
            }
            aTags[i].appendChild(textnode);                
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor elements
            for(let j = 0; j < aTags.length; j++)
            {
                menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return Promise.resolve(menu);
    }
    
    async PopulateDocumentWithMenuAsync()
    {
        for(let link in this.links)
        {
            this.links[link] += this.fileExtension;
        }
        await this.CreateMenuAsync(); //waiting on Promise object
    }

    CreateMenu()
    {
        //var menu = document.getElementsByClassName("menu");
        //var menu = document.querySelector(".menu");
        var menu = document.querySelectorAll(".menu");
        
        // amount of anchor tags == amount of links
        var aTags = new Array(this.links.length);
        var Links = this.links;

        //create anchor tags
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");
            
            //set anchor tag attributes below:
            //set link here i.e. add "./" to front of links
            aTags[i].setAttribute("href", this.SetLink(Links[i]));
            aTags[i].setAttribute("class", "menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);

            var textnode;
            if(Links[i] === "index.html") 
            {
                textnode = document.createTextNode("sameer rizvi");
            }
            else 
            {
                //position = dot's position in link
                var position = Links[i].search(this.fileExtension);

                //add text of link name/page name i.e. index, about, etc.
                //this is done by slicing from beginning of link text to just before the dot
                textnode = document.createTextNode(Links[i].slice(0,position));
            }
            aTags[i].appendChild(textnode); //add this text to the anchor tag                
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            //iterate over anchor tags
            for(let j = 0; j < aTags.length; j++)
            {
                menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return menu;
    }
    
    PopulateDocumentWithMenu()
    {
        for(let link in this.links)
        {
            this.links[link] += this.fileExtension;
        }
        return this.CreateMenu();
    }  
}

//export default Menu;