{
  /**
   * map type
   */

  //map을 사용하지 않고 video에 대해서 필수옵션인 경우 & 옵셔널인 경우 & 수정 불가 값인 경우를
  //모두 따로 만들었다. 🍅 map을 이용하면 쉽게 type속성을 변경할 수 있음.
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
    readonly description: string;
  };

  //✨ map으로 만들기
  type Optional<T> = {
    [P in keyof T]?: T[P];
    // for...in 을 사용한 것과 같음. type object정의 안에서 인덱스 기호를 쓰면 for...in처럼 빙글빙글 돌 수 있음.
    // P라는 것은 T타입의 모든 key들 중에 하나다. 그래서 T 오브젝트 안에 있는 key를 이용해서 value를 정의할 수 있음.
    //기존의 T오브젝트 타입의 모든 키들을 빙글빙글 돌면서 T타입에 있는 그 key에 해당하는 value의 type을 다시 정의한 것
    //P의 key는 옵셔널이고, T의 key들 중 하나이다. 그렇게 할당된 P는
    //예를 들어 P가 titile이면, title의 값은 T[title] (=string) 이므로
    // P(one of T's type)? : T[P] === title? : string 이 되는 것.
  };

  type VideoOptional_map = Optional<Video>;
  /**
   * type Video = { title: string; author: string; description: string; }; 를 전달했다.
   * 1. Optional에 전달된 video는 video의 key들을 빙글빙글 돈다.
   * 2. title은 옵셔널('?'기호)로 만들고 title의 value의 type은 string이므로
   * title은 string타입이며 optional이게 만들어진다.
   * 3. 그 다음 key인 author도 마찬가지로 author?:string 으로 만들어진다. 나머지도 마찬가지.
   * 사용해보자. 🔽
   */
  const videoOp: VideoOptional = {
    title: 'Horror Story',
    //title, author, description 모두 optional이기 때문에 작성하지 않아도 에러가 나지 않음.
    //하지만 title, author, description에 해당하지 않는 key를 넣으면 에러발생.
  };

  //✨ 타입을 Optional로 만들고 바로 사용하도록 한 줄에 작성해보자.
  const videoOp2: Optional<Video> = {
    author: 'bon',
  };

  //Practice 1
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const readOnlyVideo: ReadOnly<Video> = {
    title: 'bons life',
    author: 'bon',
    description: 'blahblah',
  };

  // readOnlyVideo.title = 'new life'; => readonly property이므로 수정이 불가능 해서 에러 발생.

  //Practice 2
  type Nullable<T> = {[P in keyof T]: T[P] | null};
  //key의 value는 T[P]타입이거나, null일 수 있다.
  const NullableVideo: Nullable<Video> = {
    title: null,
    author: 'bon',
    description: null,
  };

  //Practice 3
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  //어떤 인자를 받는 get()을 하면 그 인자를 리턴하고,
  //set()을 하면 그 인자를 value에 세팅하는 type.

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
  //P의 key는 T의 key들 중 하나이며,
  //value는 get():P, set(value:T[P]):void 인 type 제조기.

  function proxify<T extends object>(o: T): Proxify<T> {
    //파라미터는 object를 상속받는 T type이고 리턴타입은 Proxify<T>
    //여기서 o = {rooms:4}
    const result = {} as Proxify<T>;
    console.log(result);
    for (let key in o) {
      let rawValue = o[key]; //4
      result[key] = {
        //result[rooms]
        get: () => rawValue, //4
        set: (value) => {
          rawValue = value; //새로 들어오는 값
        },
      };
    }
    return result;
  }

  let proxifiedProps = proxify({rooms: 4});
  proxifiedProps.rooms.set(5);
  console.log(proxifiedProps.rooms.get());
}
