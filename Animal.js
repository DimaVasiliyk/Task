class Animal {
    constructor(mass,maelMass){
        this.mass = mass;
        this.maelMass = maelMass;
    }
    get fullness(){
        return (this.mass* 0.3) < this.maelMass

    }
    eat(mael){
        this.maelMass = this.maelMass + mael
    }

    sleep(){
        if(this.fullness){
            this.mass += this.maelMass
            this.mass -= this.weightLoss();
            console.log(this.mass);
        } else{
            console.log("Dont sleep")
        }
    }

    weightLoss() {
        let min = 0.10;
        let max = 0.30;
        console.log(1);
        return (Math.random() * (max - min) + min) *  this.mass;
        
      }
}

class Sheep extends Animal {
    constructor(mass,maelMass,fullness){
    super(mass,maelMass,fullness)
    }
    weightLoss() {
        let min = 0.10;
        let max = 0.10;
        console.log(1);
        return (Math.random() * (max - min) + min) *  this.mass;
    }
}

let s = new Sheep(30,0);

s.eat(2);
s.sleep();
s.eat(10);
s.sleep();


class Wolf extends Animal{
    constructor(mass,maelMass){   
        super(mass,maelMass)
    }
    eat(sheep){
        super.eat(sheep.mass);
    }
    weightLoss() {
        let min = Math.ceil(0.20);
        let max = Math.floor(0.30);
        return Math.floor(Math.random() * (max - min + 1)) + min *  this.mass;
    }
}

let d = new Wolf(50,0);
d.eat();
d.sleep();

