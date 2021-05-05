/**
 * In js this always return a reference
 */
const person ={
    name: "MOSH",
    walk(){
        console.log(this); //in this case this is returning a reference in this person object 
    }
}

person.walk();

const walk = person.walk();
//console.log(walk);
walk();
//the value of this is determined how a function is called in js 
//if you a call a function as a metjod in an object this will always return a reference to the current object 

//however, if we call a function as a standalone object 
//or outside of an object this will return the global object which is window object. 

//if its not showing window this means the strict mode is enabled by default. 
//strict mode-> a mode to exucute javacript code in more protective way 
//it prevents potensitial problem, instead of getting a reference to the window object, we get undefined. 

