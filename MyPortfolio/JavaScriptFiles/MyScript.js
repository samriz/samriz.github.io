
function CreateMenu(links, extension)
{
    var Menu = document.getElementsByClassName("menu docked");
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
}

function SetLink(link){return "./" + link;}

function PopulateFileWithMenu(extension)
{
    //var extension = ".html";
    var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension, "Contact" + extension);
    CreateMenu(links,extension);
}

function HideUnhide()
{
    var hiddenItems = document.getElementsByClassName("hidden");
    for(let i = 0; i < hiddenItems.length; i++)
    {
        hiddenItems[i].style.display
    }
}

/*function ChangeArrow()
{
    var expandItems = document.getElementsByClassName("expand");
    var collapseItems = document.getElementsByClassName("collapse");
    var before = document.getElementById("beforearrow");
    var after = document.getElementById("afterarrow");

    if(after.style.display === "none")
    {
        before.style.display = "none";
        after.style.display = "inline";       
    }
    else
    {
        before.style.display = "inline";
        after.style.display = "none";
    }
}

function ChangeArrow2()
{
    var expandItems = document.getElementsByClassName("expand");
    var collapseItems = document.getElementsByClassName("collapse");
    var before = document.getElementById("beforearrow2");
    var after = document.getElementById("afterarrow2");

    if(after.style.display === "none")
    {
        before.style.display = "none";
        after.style.display = "inline";       
    }
    else
    {
        before.style.display = "inline";
        after.style.display = "none";
    }
}*/

/*function AddLineAfterIntro()
{
    var hrNode = document.createElement("hr");
    var menuNodes = document.getElementsByClassName("jumbotron");
    for(let i = 0; i < menuNodes.length; i++)
    {
        //hrNode.after(menuNodes[i]);
        menuNodes[i].after(hrNode);
    }
}*/