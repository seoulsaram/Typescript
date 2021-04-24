{
  //inference : 타입추론
  //타입스크립트도 타입추론이 가능하지만, 웬만하면 타입을 명시해주는 것이 좋다.

  //text변수에 타입을 지정하지 않고 'hello'라는 문자열을 넣었다.
  //타입스크립트는 text라는 변수의 타입을 string으로 추론하여 지정했기 때문에
  //이후 text변수에 string 이외의 다른 타입을 넣으면 컴파일 오류가 발생한다.
  let text = 'hello';
  //text = 2; => compile error

  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');
  //print(2); => compile error

  function add(x: number, y: number) {
    return x + y;
  }
  //return type이 number로 자동으로 추론된다.
  const result = add(1, 2); //result의 타입은 자동으로 number로 추론된다.
}
