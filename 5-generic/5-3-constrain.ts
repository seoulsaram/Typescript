interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time');
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
//payBad함수는 인자를 Employee타입으로 받아서, pay를 진행한 뒤 그대로 리턴한다.
//그런데 리턴되고 난 인자의 타입은 FullTimeEmployee를 받았거나 PartTimeEmployee를 받았어도
//Employee타입으로 리턴되어버리기 때문에, 각각 workParTime, workFullTime함수를 사용할 수 없게 된다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//generic에 constrain 하기
//Employee를 구현한(확장한) 아이만 받는다는 뜻.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const bon = new FullTimeEmployee();
const bob = new PartTimeEmployee();
bon.workFullTime();
bob.workPartTime();

const bonAfterPay = pay(bon);
const bobAfterPay = pay(bob);
bonAfterPay.pay();

//----------
const obj = {
  name: 'bon',
  age: 20,
};

const obj2 = {
  animal: '🕊',
};

//getValue는 두개의 인자를 받는데, T는 어떤 타입이든 받고,
//K는 T의 key중 하나를 받는다.
//리턴값은 T에 있는 K의 value가 리턴된다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); //bon
console.log(getValue(obj, 'age')); //20
console.log(getValue(obj2, 'animal')); //🕊
