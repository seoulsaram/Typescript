{
  // list구조로 pop, push 구현하기

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {
      this.capacity = capacity;
    }
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node = {value: value, next: this.head};
      //새로운 값을 받아 node타입으로 감싸주고, next라는 포인터를 설정해준다.
      this.head = node;
      //head는 가장 나중에 들어온 노드를 가리킨다. 리스트가 텅텅 비어있다면 head의 포인터는 null이다.
      //head = {value:value, next:this.head}
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head; //제거하려는 노드
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(2);
  stack.push('ellie 1');
  stack.push('bon 1');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(2);
  stack2.push(1);
  stack2.push(1332);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
