//complete this code
class Animal {
    species;
    constructor(species){
        this.species=species;
    }
    get makeSound(){
        return `${this.species}sound the animal makes` ; 
     }

}

class Dog extends Animal {
    constructor(species){
        super(species)


    }
    purr(){
        console.log("purr")
    }
}

class Cat extends Animal {
    constructor(species){
        super(species)


    }
    bark(){
        console.log("woof")
    }

}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;