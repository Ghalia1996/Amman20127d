"use strict";

alert("Welcome in My Wold\n Let's guess");
let userName = prompt('Whats User name?');
let check = prompt("Please answering the questions only Y/N or YES/NO");
let rating = 0;
if (check.toUpperCase() == 'Y' || check.toUpperCase() == ' YES'){
    let programming = prompt("Am i using JS programming language to made this prompt?");
    if (programming.toLowerCase() == 'y' || programming.toLowerCase() == 'yes'){
        rating++;
        console.log(programming);
    }
    let graduationDate = prompt("Am i graduation since 2020");
    if (graduationDate.toUpperCase() == 'N'||graduationDate.toUpperCase() == 'NO'){
        rating++;
    }
    let myAge = prompt("Am i 29 Year's old?");
    if (myAge.toUpperCase() == 'N'|| myAge.toUpperCase() == 'NO'){
        rating++;
    }
    let myFavFilm = prompt("Am i love Titanic Film?");
    if (myFavFilm.toLowerCase() == 'y' || myFavFilm.toLowerCase() == 'yes'){
        rating++;
    }
    alert("You are Getting " + rating + " of 4");
}
else{
    alert("You are Lose in the Game.\n");
}