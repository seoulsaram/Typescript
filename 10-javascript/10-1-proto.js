const x = {};
const y = {};
console.log(x);
console.log(y);

console.log(x.__proto__ === y.__proto__); //true
//위의 결과가 true인 이유는 x와 y가 동일한 object의 proto를 상속하고 있기 때문임.

const array = [];
console.log(array);
//array는 Array라는 proto를 상속하고, 이 Array의 proto는 object의 proto를 상속한다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  //만들어지는 instance마다 포함이 되는 function이라서
  //instance memger level이다. 그래서 객체를 만들 때마다 새로 만들어짐
  this.makeCoffee = (shots) => {
    console.log('making...🥛');
  };
}

//Prototype member level : makeCoffee2라는 함수를 CoffeeMachine이 상속받도록 함
CoffeeMachine.prototype.makeCoffee2 = (shots) => {
  console.log('making...🥛');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
//LatteMachine이 CoffeeMachine prototype을 상속받게 해서
//CoffeeMachine 안에 있는 makeCoffee2함수를 사용할 수 있게 만들었다.

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee2();
