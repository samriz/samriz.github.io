function SetLink(link){return "./" + link;}

function CreateMenuAsync(links, extension)
{
    var Menu = document.getElementsByClassName("menu");
    var aTags = new Array(links.length);

    //create anchor tags
    for(let i = 0; i < aTags.length; i++)
    {
        aTags[i] = document.createElement("a");

        //set link here
        //aTags[i].setAttribute("href", "./" + links[i]);
        aTags[i].setAttribute("href", SetLink(links[i]));
        aTags[i].setAttribute("class", "menuitem");
        aTags[i].setAttribute("id", "menuitem" + i);
        /*if(links[i] === "resume.html")
        {
            aTags[i].setAttribute("target", "resume");
        }*/

        var textnode;
        if(links[i] === "index.html") 
        {
            textnode = document.createTextNode("sameer rizvi");
        }
        else 
        {
            var position = links[i].search(extension);
            textnode = document.createTextNode(links[i].slice(0,position));
        }
        aTags[i].appendChild(textnode);                
    }
    //Menu.item(i).innerHTML += " ";

    //place a vertical line between each menu item
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

async function PopulateFileWithMenuAsync(extension)
{
    //var links = new Array("index", "resume", "about", "contact");
    var links = new Array("index", "about", "contact");
    for(var link in links)
    {
        links[link] += extension;
    }
    await CreateMenuAsync(links,extension); //waiting on Promise object
}

export default PopulateFileWithMenuAsync;