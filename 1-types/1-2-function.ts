{
  //   //JavaScript💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScript✨
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript💩
  //   function jsFetchNum(id) {
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //TypeScript✨
  //   function FetchNum(id: string): Promise<number> {
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //JavaScript => TypeScript (타입이 더해진 함수 정의 방법)
  // 1. Optional parameter : 타입스크립트에서는 파라미터의 갯수, 타입을 정해놨다면
  // 해당 함수를 부를 때, 이 파라미터 갯수, 타입이 맞지 않으면 에러가 발생한다.
  // 그런데 정말로 어떤 파라미터가 들어올지 알 수 없어서 파라미터를 옵션(있어도 되고 없어도 되는)으로 주고 싶다면?
  // 물음표'?'를 붙여준다.
  //👹strict하게 파라미터를 받는 버전
  //   function printName(firstName : string, lastName: string){
  //       console.log(firstName);
  //       console.log(lastName);
  //   }
  //   printName('Steve', 'Jobs');
  //   printName('Ellie', 0);

  //😇옵셔널하게 파라미터 받는 버전
  //아래와 같이 ?를 붙여주면 lastName이라는 파라미터는 받을 수도, 받지 않을 수도 있다는 뜻.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  //2. Default parameter : 파라미터 값이 null일 경우 자동으로 세팅해줄 값
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // 3. Rest parameter : 파라미터 갯수를 정하지 않고 여러개 받을 수 있음. 다만 받아져온 파라미터는 배열형태로 받아짐.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
