"use strict";

export default class Menu
{
    /**
     * @param {string[]} links 
     * @param {string} fileExtension 
     */
    constructor(links, fileExtension)
    {
        this.links = links;
        this.fileExtension = fileExtension;
    }

    get Links(){return this.links;}
    get FileExtension(){return this.fileExtension;}

    set Links(links){this.links = links;}
    set FileExtension(fileExtension){this.fileExtension = fileExtension;}
}