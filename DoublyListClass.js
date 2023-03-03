class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doubleList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    //Додаємо вузол в кінець списку
    push(mean){
        //Створюємо новий вузол
        const newNode = new Node(mean)
        //якщщо список пустий треба зробити вершину і кінець вузла
        if(this.head){
            this.head = newNode
            this.tail = newNode
            // в іншому впиадку додати значення в кінець
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // Додати елемент в початок
    unshift(mean){
        const newNode = new Node(mean);
        
        if(!this.head){
            this.head = newNode;
            this.tail = new Node;

        } else {
            this.head.prev = newNode;
            newNode.next = this.head
            this.head =newNode;
        }
        this.lenght++;
        return this;
    }

    // Видалення вузла з кінця списку

    pop(){
        if(this.lenght === 0){
            return false;
        }
        const poped = this.tail;
        const newTail = this.tail.prev;
        if(newTail){
            // розірвати звязки до і від
            newTail.next = null;
            this.tail.prev = null;
        } else {
            this.head = null;
        }
        this.tail = newTail;
        this.lengh--;
        return poped;
        
    } 

    // Видалення вузла з початку списку
    shift(){
        if(!this.head){
            return false;
        }

        const shiftNode = this.head;

        const newHead = this.head.next;

       if(this.head !== this.tail){
           newHead.prev = null;
           shiftNode.next = null;
       } else {
           this.tail = null;
       }
        this.head = newhead;
        this.lenght --;
        return shiftNode;
    }

    getNodeAtIndex(index){
        // якщо індексу немає в списку
        if(index >= this.lenght || index < 0){
            return null;
        }
        // перебираємо вузли поки не знайдемо потрібний
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex != index){
            currentNode = currentNode.next
            currentIndex++;
        }
        return currentNode;
    }
    // змінити вузол за заданим індексом
    setNodeAtIndex(mean,index){
        const foundNode = this.getNodeAtIndex(index);
        // Якщо вузол знайдено обновити і вернути
        if (foundNode) {
            foundNode.mean = mean;
            return foundNode;
        }
    }

    // додати новий вузол за заданим індексом 
    insertAtIndex(index,mean){
        if(index < 0 || index>this.lenght){
            return false;
        }
            if (index === 0) {
                return this.unshift(mean)
            }
            
            if (index === this.lenght){
                return this.push(mean)
            } else { 
            // 
            const newNode = new Node(mean);
            const after = this.getNodeAtIndex(index);
            const before = after.prev;
            after.prev = newNode;
            before.next = newNode;
            newNode.next = after;
            newNode.prev = before;
            this.length++;
            }
            return this;
    }
    // Видалити вузел з індексом 
    remove(index){
       let removedNode;
       if(index >= this.lenght){
           return false;
       }
       if(index == 0){
           removedNode = this.shift();
       } else if ( index == this.lenght-1 ){
           removedNode = this.pop();
       } else {
        removedNode = this.getNodeAtIndex(index);
        const after = removedNode.next;
        const before = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;

       }
       return removedNode;
    }

    printList() {
        console.log(doubleList)
        if(this.head){
          let current = this.head;
          while (current.next) {
            console.log(current);
            current = current.next;
          }
          console.log(current);
        } else {
          console.log("empty list")
        }
      }

    printList(doubleList) {

        console.log(doubleList.mean); 
      
        if (doubleList.next) {
          printList(doubleList.next); 
        }
      
      }
      
    printList(doubleList);
}



// const Chill = new doubleList(1,2,3,4,5);

// console.log(Chill.remove(4));