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

    CreateMenu()
    {
        var menu = document.getElementsByClassName("menu");
        var aTags = new Array(this.links.length);
        var Links = this.links;

        //create anchor tags
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set link here
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
                var position = Links[i].search(this.fileExtension);
                textnode = document.createTextNode(Links[i].slice(0,position));
            }
            aTags[i].appendChild(textnode);                
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            for(let j = 0; j < aTags.length; j++)
            {
                menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return menu;
    }
    
    PopulateFileWithMenu()
    {
        for(let link in this.links)
        {
            this.links[link] += this.fileExtension;
        }
        return this.CreateMenu();
    }

    CreateMenuAsync()
    {
        var menu = document.getElementsByClassName("menu");
        var aTags = new Array(this.links.length);
        var Links = this.links;

        //create anchor tags
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set link here
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
                var position = Links[i].search(this.fileExtension);
                textnode = document.createTextNode(Links[i].slice(0,position));
            }
            aTags[i].appendChild(textnode);                
        }
        //Menu.item(i).innerHTML += " ";

        //place a vertical line between each menu item
        for(let i = 0; i < menu.length; i++)
        {
            for(let j = 0; j < aTags.length; j++)
            {
                menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) menu.item(i).innerHTML += " | ";
            }            
        }
        return Promise.resolve(menu);
    }
    
    async PopulateFileWithMenuAsync()
    {
        for(let link in this.links)
        {
            this.links[link] += this.fileExtension;
        }
        await this.CreateMenuAsync(); //waiting on Promise object
    }  
}

//export default Menu;