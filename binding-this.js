/**
 * Binding this -> 
 */
 const person ={
    name: "MOSH",
    walk(){
        console.log(this); //in this case this is returning a reference in this person object 
    }
}

person.walk();

const walk = person.walk.bind(person);
//console.log(walk);
walk();

//amra kono function dot bind er moddhe dia jei argument ke pass korbo seita this er value ke replace kore dibe 
// function myFunction(){
//     console.log(this);
// }
// myFunction()
// myFunction.bind({a: 10})()
