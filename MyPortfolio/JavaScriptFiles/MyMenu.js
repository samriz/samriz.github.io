    function CreateMenuAsync(links, extension)
    {
        var Menu = document.getElementsByClassName("menu");
        var aTags = new Array(links.length);
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set link here
            //aTags[i].setAttribute("href", "./" + links[i]);
            aTags[i].setAttribute("href", SetLink(links[i]));
            aTags[i].setAttribute("class", "menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);
            var position = links[i].search(extension);
            var textnode = document.createTextNode(links[i].slice(0,position));
            aTags[i].appendChild(textnode);                
        }
        //Menu.item(i).innerHTML += " ";
        for(let i = 0; i < Menu.length; i++)
        {
            for(let j = 0; j < aTags.length; j++)
            {
                Menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) Menu.item(i).innerHTML += " | ";
            }            
        }
        return Promise.resolve(Menu);
    }

    function CreateMenu(links, extension)
    {
        var Menu = document.getElementsByClassName("menu");
        var aTags = new Array(links.length);
        for(let i = 0; i < aTags.length; i++)
        {
            aTags[i] = document.createElement("a");

            //set link here
            //aTags[i].setAttribute("href", "./" + links[i]);
            aTags[i].setAttribute("href", SetLink(links[i]));
            aTags[i].setAttribute("class", "menuitem");
            aTags[i].setAttribute("id", "menuitem" + i);
            var position = links[i].search(extension);
            var textnode = document.createTextNode(links[i].slice(0,position));
            aTags[i].appendChild(textnode);                
        }
        //Menu.item(i).innerHTML += " ";
        for(let i = 0; i < Menu.length; i++)
        {
            for(let j = 0; j < aTags.length; j++)
            {
                Menu.item(i).appendChild(aTags[j]);
                if(j != aTags.length-1) Menu.item(i).innerHTML += " | ";
            }            
        }
        return Menu;
    }

    function SetLink(link){return "./" + link;}

    async function PopulateFileWithMenuAsync(extension)
    {
        var links = new Array("Home", "Resume", "About", "Contact");
        for(let i = 0; i < links.length; i++)
        {
            links[i] += extension;
        }
        await CreateMenuAsync(links,extension); //waiting on Promise object
    }

    function PopulateFileWithMenu(extension)
    {
        var links = new Array("Home", "Resume", "About", "Contact");
        for(let i = 0; i < links.length; i++)
        {
            links[i] += extension;
        }
        CreateMenu(links,extension);
    }

    PopulateFileWithMenuAsync(".html");