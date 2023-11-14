'use strict'
let myName = "Obed Sarkodie";
console.log("Hello " + myName);

class Animal{
    constructor(domestic, wild){
        this.domestic = domestic;
        this.wild = wild;
    }
    showName(){
        console.log("This animal is "+ this.wild);
    }
}
let ani = new Animal("LIOn", "goat");
ani.showName();