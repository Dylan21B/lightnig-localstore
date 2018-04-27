"use strict";
console.log("Hi Dylan");


const madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
 }

 localStorage.setItem('madLibrary', JSON.stringify(madLibrary));

 var madObject = localStorage.getItem('madLibrary');

 let newMadObj = JSON.parse(madObject);



 let paragraph = 
 `Would it surprise you to learn that the most majestic ${newMadObj.pluralNoun} in the world eat garbage? Well, they do! Everything from ${newMadObj.adjective1} soda cans to ${newMadObj.noun}-stained type of food boxes to used ${newMadObj.articleOfClothing} - and more! Some have been spotted verb ending in "ing" dumpsters and then using their long plural noun to spear as many bags of plural noun as they can before being caught. According to an interview with the Number Minutes News, Celebrity once came home to find a/an color unicorn verb ending in "ing" up in the recycling bin. The poor thing had mistaken leftover type of food for dried up plural noun. "It was a/an adjective minstake. I am a good cook!"`
 
 document.write(paragraph);
 console.log("madObject", newMadObj.pluralNoun);
