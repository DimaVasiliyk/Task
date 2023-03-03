function Node(data) {
    this.data = data;
    this.next = null;
}

function addItem(n1,n2){
    const tmp = n1.next
    n1.next = n2
    n2.next = tmp

}
console












function SinglyList() {
    this._length = 0;
    this.head = null;
}

// Метод add(value)

SinglyList.prototype.add = function(value) {
    let node = new Node(value),
        currentNode = this.head;

    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2-ой случай: не пустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

// Метод searchNodeAt(position)

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

// Метод remove(position)

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3-ий: все прочие узлы удалены
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};