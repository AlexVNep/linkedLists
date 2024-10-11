class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.nextNode === this.tail) {
        currentNode.nextNode = null;
        this.tail = currentNode;
        return;
      }
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += `${currentNode.value} -> `;
      currentNode = currentNode.nextNode;
    }
    return str;
  }

  insertAt(index, value) {
    let newNode = new Node(value);
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (count === index) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        return;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }

  removeAt(index) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (count === index) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("rat");

console.log(list.toString());
console.log(list.at(4));
console.log(list.find("rat"));
