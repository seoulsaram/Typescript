{
  //Array : 배열을 정의하는 방법 두가지
  const num1: number[] = [1, 2, 3];
  const num2: Array<number> = [1, 2, 3];
  //이 둘의 차이는?
  //readonly는 []에만 사용할 수 있다.
  //readonly는 데이터 변경을 불가하게 해주는건데, 굉장히 많이 쓰이므로
  //일관성 있게 []를 사용하는게 더 좋을 것 같다.
  function printArray(num1: readonly string[]) {}
  // function printArray2(num2: readonly Array<number>){}

  //Tuple 💩 : 서로 다른 타입의 데이터를 담을 수 있음 -> 가독성이 똥
  //interface, type alias, class를 대체제로 사용하는 것이 좋다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; //name
  student[1]; //123
  //배열은 인덱스 값으로만 데이터를 꺼낼 수 있는데 각각 다른 타입이 들어있으면
  //각 인덱스에 어떤 데이터가 들어있을지 예측할 수 없으므로 별로다.
  const [name, age] = student;
  //배열도 오브젝트처럼 destructing이 가능하다. 이렇게 사용해도 불편한건 마찬가지.
  //하지만 react의 useState는 이러한 튜플을 아주 유연하게 잘 활용한 예시이다.
}
