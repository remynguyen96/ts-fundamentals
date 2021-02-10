interface DataStructure<T> {
  push(newItem: T): void;
  pop(): void;
}

class Stack<T> implements DataStructure<T> {
  
  items: Array<T> = [];
  
  push(newItem: T): void {
    this.items.push(newItem);
  }
  
  pop(): void {
    this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }
}

let myNumberStack = new Stack<number>();

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

console.log(myNumberStack.peek()); // 2