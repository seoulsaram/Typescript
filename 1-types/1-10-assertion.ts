{
  // Type Assertions 💩 : 타입 강요

  // 상황 1.
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  //상황 설명 : jsStrFunc함수는 명백히 string을 리턴하고 있으나, 리턴타입이 any로 되어있다.
  //(자바스크립트에서는 함수 리턴타입이 자동으로 void거나 any로 되어있으니까)
  //그래서 result변수에 jsStrFunc의 리턴값을 돌려받도록 해놓았을 때, result의 타입도 any이다.
  //이 때 result.length라는 string api를 사용하고 싶어도, result타입이 any이기 때문에 사용할 수 없는
  //문제가 생긴다.내가 result의 타입이 분명히 string임을 장담할 수 있는 상황일 때 type assertion을 사용할 수 있다.

  console.log((result as string).length); // => 5
  console.log((<string>result).length); //같은 결과
  //하지만 예상과 다르게 return타입이 다른 타입일 수도 있다. 이럴 경우 결과는 undefined가 나온다.(서버가 죽는 정도의 에러는 아님)
  //그렇기 때문에 내가 정말 100% 장담할 때만 사용해야 한다.

  //상황 2.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  //하지만 이 경우, wrong.push is not a function 오류와 함께 어플리케이션이 죽는다.
  //그렇기 때문에!! Type assertions는 가능한 한 사용하지 않고, 어쩔 수 없는 경우
  // 100%확신할 수 있을 때만 사용한다.

  //상황 3.
  //fundNumbers의 return type은 number array거나, undefined이다.
  //그런데 나는 무조건 number array라고 확신해! 그래서 push메소드를 사용하고 싶다.
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //number.push(2); => compile error (undifned일 수도 있으니까)
  numbers!.push(2); //아냐 undefined아니고 무조건 array임. 그러니 push사용하게 해줘. 할 때 (!)를 붙여준다.
  //const numbers = findNumbers()!; 함수 호출할 때 느낌표 붙여줘도 마찬가지임.
  //그런데 만약 내 예상이 틀렸을 경우 에러와 함께 서버가 죽을 수 있다!!
}
