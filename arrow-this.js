const person ={
    talk(){
        setTimeout(function(){
            conslole.log("this", this)    
        }, 1000);
        //conslole.log("this", this)
    }
}

person.talk();