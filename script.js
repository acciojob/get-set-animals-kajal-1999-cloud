//complete this code
class Animal {
	constructor(species){
		this.Species = species;
	}
}

get species(){
	return this.Species;
}

makeSound(sound){
	console.log(`the ${this.Species} makes a sound`)
}
class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}
Dog.bark();
Cat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
