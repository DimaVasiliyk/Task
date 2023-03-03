function Human(name,say){
    this.name = name;
    this.say = say;
    this.showName = function(){
        console.log(this.name);     
 }
     this.showSay = function(){
        console.log(this.say);     
 }
}

function Man(name){
    this.__proto__ = new Human(name)
    this.name = "Joq"
}
  
let obj1= new Man('Don',"Hello>>>>>>");
let obj2= new Human('Leo',"Hello......");


obj1.showName(); 
obj1.showSay();    
obj2.showName(); 
obj2.showSay();    




