class Human {
    constructor(name) {
        this.name = name
    }
    
    sayMyName() {
        return 'Hello' + this.name; 
    }
}

class Men extends Human {
    constructor(name){
        super(name)
    }
}

class Coder extends Human {
    constructor(name){
        super(name)
    }
}

const don = new Men('Don')
const leo = new Coder('Leo')

console.log(don.sayMyName())
console.log(leo.sayMyName())