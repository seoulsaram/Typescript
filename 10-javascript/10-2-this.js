console.log(this); //window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); //window
//global에서 함수를 호출한다는 것은 window.simpleFunc(); 와 같다.
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); //Counter
const caller = counter.increase;
//counter.increase의 pointer를 caller에 할당했기 때문에 여기서 this의 정보를 잃어버린다.
//let과 const로 선언한 변수는 window에 등록되어있지 않으므로, caller를 호출하는 것은 window도, 어떠한 오브젝트도 아니므로
//undefined이 호출하는 것과 같다.
caller(); //undefined

function helloWorld() {
  console.log('hello');
}
window.helloWorld();
//우리가 선언한 객체는 기본적으로 window에 등록이 됨.
//하지만 const나 let은 등록되지 않는다.

const bon = 'bon';
let bond = 'bond';

console.log(window.bon); //undefined.
//window에 등록되어있지 않아서 window에서 접근 불가
//😨그런데 var는 등록이 됨

var badVar = 'badVar';
console.log(window.badVar); //badVar

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); //Bob => run이라는 함수를 Bob이 불렀기 때문에.

const caller2 = counter.increase.bind(counter);
caller2(); //Counter

//bind나 call 없이 알아서 bind되게 하려면 arrow function 사용
//arrow function은 선언 될 당시의 스코프를 기억하고 있기 때문에 this context를 유지한다.
class Counter2 {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter2 = new Counter2();
const thisTest = counter2.increase;
thisTest(); //Counter2
