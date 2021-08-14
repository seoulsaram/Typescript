/**
 * @interface : 어떤 것의 규격사항. 정해진 인터페이스를 토대로 상호작용 할 수 있도록 해주는 것.
 * 때문에 interface는 어떤 규격사항이 필요할 때, 그리고 이 규격을 통해서 어떤 것이 구현되어 질 때 사용한다.
 * @type : 어떠한 데이터를 담을 때, 그 데이터의 모습, 타입을 결정하는 것.
 * 때문에 type은 어떤 데이터의 형태를 묘사할 때 사용하는 것이 적합하다. 어떤 것을 구현하기 위해서가 아닌 데이터를 담기 위한 용도로 사용.
 *
 * type과 interface의 공통점
 * 두 개 모두 오브젝트 형태로 만들 수 있다.
 * 두 개 모두 class로 구현이 가능하다
 * 두 개 모두 extends 할 수 있다. (정확히는 interface만 extends키워드로 확장하고 type은 intersection을 통해 가능.)
 *
 * type과 interface의 차이점
 * 인터페이스는 같은 이름의 인터페이스를 두 번 작성하고 그 내용을 다르게 할 경우
 * merge된다. (type은 불가능)
 */
type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

//object 형태
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

//class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
} //밑에 PositionInterface에서 z를 추가했기 때문에 여기서는 z가 없어서 에러가 남.

//Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

//intersection을 통해 두가지를 묶어줌 (PositionType + {z:number})
type ZPositionType = PositionType & {z: number};

//이런 식으로 사용하는 것은 interface만 가능 (자동으로 위의 인터페이스와 merge됨)
interface PositionInterface {
  z: number;
}

//Type aliases can use computed properties.
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; //Name이라는 타입은 Person에 있는 'name'이라는 키가 가지고 있는 값의 타입을 쓸거다. 즉 Name은 string타입이 된다.

type NumberType = number; // type만 가능
type Direction = 'left' | 'right'; //union타입도 type만 가능
