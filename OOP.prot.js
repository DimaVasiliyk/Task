function Animal(name)
{
  this.name = name;
}

Animal.prototype.speak = function()
{
    console.log(this.name + " says:");
}


function Dog(name)
{
  Animal.call(this, name);
}

Dog.prototype.speak = function()
{
  Animal.prototype.speak.call(this);
  
    console.log("woof");
}


function Cat(name)
{
  Animal.call(this, name);
}

Cat.prototype.speak = function()
{
  Animal.prototype.speak.call(this);
  
    console.log("miaow");
}






let Human = {
    name: "Joq",
    say() {
      console.log("humHumanan say Hello, name///// ");
    }
};

let Men = {
  name: "Pet",
  __proto__: Human
};

let Cod = {
  name: "Doc",
  __proto__: Human
}

Men.say();

Cod.say = function() {
  console.log("Rabbit! Bounce-bounce!");
};
Cod.say()