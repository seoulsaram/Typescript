//함수에서 제네릭 사용하기
{
  //null체크를 인자가 넘버타입일 때만 할 수 있는 나쁜 함수의 예제
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  //generic을 사용하면 모든 타입을 받을 수 있다.
  //이 함수는 어떤 타입이든 받아서, 인자가 있다면, 같은 타입으로 리턴하는 함수.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  console.log(number);
  const boal: boolean = checkNotNull(true);
}
