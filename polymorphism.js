class Human {
    constructor(name){
        this.name = name;
    }

    say(){
        return `Hello, name  ${this.name}, i Like ///`
    }
}

class Men extends Human {
    constructor(name){
    super(name)
    }
}

class Coder extends Human{
    constructor(name){
    super(name)
    }
    // щоб say спочатку було з головного класу а потім з того який наслідує
    say(){
        return  super.say() +`Hello I  ${this.name}, ......`
    }
}

const alex = new Men('Alex')
const peter = new Coder('Peter')

console.log(alex.say())
console.log(peter.say())

