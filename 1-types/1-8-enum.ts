{
  //Enum : 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입이다.
  //자바스크립트에는 Enum이 없기 때문에 타입스크립트 자체에서 제공하고 있다.
  //자바스크립트에서 상수를 정의할 때는 한 번 정해지면 바뀌지 않는 특정한 고정값을 나타낼 때
  //전부다 대문자로 표기해서 사용한다.

  //Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  //이런식으로 사용한다. ⁉️ 이렇게 사용하면 되는데 왜 Enum을 사용하나효?
  const MONDAY = 0;
  const TUESDAY = 1; //이렇게 연관있는 상수들을 묶어줄 수 있는 기능이 없기때문!
  //하지만 아래와 같이 Enum비슷하게 구현하는 방법이 있긴 하다.
  const DAYS_ENUM = Object.freeze({MONDAY: 0, TUESDAY: 1});
  const dayOfToday = DAYS_ENUM.MONDAY; //사용할 땐 이렇게

  //TypeScript
  enum Days { //enum에서는 변수이름의 첫 글자만 대문자로 적는다.
    Monday,
    Tuesday,
    Wendnesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // => 0. enum 안의 값들에 따로 값을 넣지 않으면 자동으로 0부터 값이 매겨진다.
  const day = Days.Saturday;

  enum Days2 {
    Monday = 'mon',
    Tuesday = 'tue',
    Wendnesday = 'wed',
    Thursday = 'thur',
    Friday = 'fri',
    Saturday = 'sat',
    Sunday = 'sun',
  }
  console.log(Days2.Monday); // => mon

  //💩💩💩 이렇게 편리한 enum을 타입스크립트에서는 가능한 한 사용하지 않는 것이 좋다!!
  //왜? enum을 사용하면 타입이 정확하게 보장되지 않기 때문이다.
  let day2 = Days.Monday;
  //day2는 내부적으로 let day2:Days = Days.Monday; 이렇게 생겨서 Days에 해당하는 값만 넣을 수 있다.
  day2 = 10;
  //그런데 day2변수에 Days에 존재하지 않는 10이라는 숫자를 넣어도 컴파일 오류 및 런타임 오류가 발생하지 않는다.
  //이렇게 타입이 보장되지 않는 점 때문에 타입스크립트에서는 enum을 사용하지 않는 것이 좋다.

  //✨✨✨ enum대신 union타입을 사용하자!
  type Days3 = 'Monday' | 'Tuesday' | 'Wendnesday' | 'Thursday';
  let days3: Days3 = 'Thursday';
  console.log(days3);
}
