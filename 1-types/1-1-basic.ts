{
  //  JavaScript
  //  Primitive: number, string, boolean, bigint, symbol, null, undefined
  //  Object : function, array.....

  //number
  const num: number = 0.1;

  //string
  const str: string = 'hello';

  //boolean
  const boal: boolean = false;

  // undefined : 비었는지 안 비었는지 아직 결정되지 않음
  let name: undefined; //이렇게 사용하지 않음(undefined만 들어가게 되면 해당 변수는 쓸모가 없자너)💩
  let age: number | undefined; //'|'는 '또는'이라는 뜻으로 age에는 넘버 또는 결정되지 않은 상태가 들어갈 수 있다.
  age = undefined;
  age = 1;

  // null : 의도적으로 비워둔 것
  let person: null; //이렇게 사용하지 않음(null만 들어가게 되면 해당 변수는 쓸모가 없자너)💩
  let person2: string | null;
  person2 = 'hi';

  //🥰 정리 : type|undefined 는 무슨(넘버,스트링 등등)타입이거나, 아직 정해지지 않았을 수 있을 때 사용하고
  // type|null 은 무슨타입이거나, 텅텅비었거나 일 때 사용한다. 보통 type|undefined를 더 많이 사용한다고 한다.
  function find(): number | undefined {
    //리턴값이 넘버일 수도 있고, 없을 수도 있을 때 활용.
    return undefined;
  }

  //unknown : 어떤 종류의 데이터가 들어올지 알 수가 없는 타입
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;
  //보다싶이 어떤 타입이든 넣을 수 있다. 💩냄새나는 타입.

  //any : 어떤 것이든 담을 수 있는 타입 💩
  let anything: any = 0;
  anything = 'hello';

  {
    /* 함수 */
  }
  //void : 아무것도 리턴하지 않는 것.
  function print() {
    console.log('hello');
    return;
  }
  //함수를 만들 때 return을 써주지 않은 경우, 사실은 return이 생략된 것일 뿐이다.

  function print2(): void {
    //void는 생략해도 된다.
    console.log('hello');
    return;
  }

  let unusable: void = undefined; //void타입에는 undefined밖에 넣어주지 못한다.💩

  //never : 리턴하지 않는 함수라니? 리턴되지 않으면 함수가 끝나지 않으니, 이 함수가 호출되면 함수가 끝나지 않아 영원히 어플리케이션이 중지되거나, 서버가 죽을 것이다.
  function throwError(message: string): never {
    //message -> server(log) 에러가 발생하면 에러메세지를 서버에 전송, 로그로 남기고 어플리케이션에서 에러를 던진다.
    throw new Error(message);
    // while(true){} 또는 while문을 true로 준다.

    //never타입에는 return을 쓸 수 없다.
  }
  //정말 예상치 못한 에러나, 핸들링 할 수 없는 에러가 발생했을 때 호출할 수 있는 함수다.

  //object : 원시타입을 제외한 어떤 타입의 오브젝트도 담을 수 있다. 💩 오브젝트 타입도 명시해 주는 것이 안전하다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'gayeon' });
  acceptSomeObject({ animal: 'dog' });
  obj = ['array', 'array2'];
}
