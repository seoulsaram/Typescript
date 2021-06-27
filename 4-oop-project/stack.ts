// list구조로 pop, push 구현하기

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
  //next = {value: string, next : StackNode} 형태가 되는 것
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  constructor(private capacity: number) {
    this.capacity = capacity;
  }
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = {value: value, next: this.head};
    //새로운 값을 받아 node타입으로 감싸주고, next라는 포인터를 설정해준다.
    this.head = node;
    //head는 가장 나중에 들어온 노드를 가리킨다. 리스트가 텅텅 비어있다면 head의 포인터는 null이다.
    //head = {value:value, next:this.head}
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      //null과 undefined는 엄연힌 다른 타입이나, '=='연산자로 비교하면 true가 나온다. 하지만 '==='연산자로 비교하면 false.
      //여기서는 null과 undefined를 동시에 필터될 수 있도록 '=='연산자를 사용함.
      throw new Error('Stack is empty!');
    }
    const node = this.head; //제거하려는 노드
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(2);
stack.push('ellie 1');
stack.push('bon 1');
while (stack.size !== 0) {
  console.log(stack.pop());
}
