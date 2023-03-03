function Stack(array){
    this.array = array;
    this.Stackpush = function(a){
        console.log(this.array.push(a));
        console.log(this.array);     
 }
     this.popStack = function(b){
        console.log(this.array.pop(b)); 
        console.log(this.array);       
 }
}

function Queue(array){
    this.array = array;
    this.Queueshift = function(c){
        console.log(this.array.shift(c));  
        console.log(this.array); 
 }
    this.popQueue = function(d){
        console.log(this.array.pop(d)); 
        console.log(this.array);       
 }
}
  
let obj1= new Stack([1, 2, 3, 4, 5]);
let obj2= new Queue([5, 4, 3, 2, 1]);


obj1.Stackpush(2); 
obj1.popStack(4);    
obj2.Queueshift(5); 
obj2.popQueue(6);    
