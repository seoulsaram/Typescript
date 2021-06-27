Array; /* 📖 every는 두가지 인자를 받는데, 첫번째 인자는 콜백함수이고, 두번째는 thisArg이다.

/* ✨ 같은 이름의 메서드가 두개 정의되어 있다. 
    이것은 overloading으로, 같은 이름의 메서드이지만, 어떤 인자를
    전달하냐에 따라 첫번째 것이 호출될 수도, 두번째 것이 호출될 수 도 있다.
*/
//concat(...items: ConcatArray<T>[]): T[];
/* 📖 ...items는 원하는 만큼의 인자를 전달할 수 있다는 뜻.
    ConcatArray라고 하는 데이터타입의 배열을 원하는 갯수만큼 전달할 수 있고,
*/
//concat(...items: (T | ConcatArray<T>)[]): T[];

//every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
/*  📖 콜백함수는 총 3가지 인자를 받고있다.
    리턴되는 타입은 unknown으로, 우리가 어떤 타입이 리턴될지 알 수 없다.
 */

//every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
/*  
   📖 콜백함수에서는 value가 T인데, value가 S인지 아닌지 확인하는 함수이다. 
    여기서 S는 T를 상속받는 타입임
*/

//두번째 every api 테스트해보기
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

//Animal타입의 배열을 만든다.
const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

//isCat함수는 Animal타입의 인자를 받고, 이것이 Cat인지 체크한다.
//모든 인자를 Cat으로 casting한 뒤, 안에 isCat이라는 프로퍼티가 undefined가 아닌 것을 리턴한다.
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

//every가 받는 타입을 Cat으로 받고, 콜백함수 isCat 실행
console.log(animals.every<Cat>(isCat));
