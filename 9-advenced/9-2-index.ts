/**
 * @index type :다른 타입에 있는 key에 접근해서 그 키에 value의 타입을
 * 그대로 다시 선언하는 것을 할 수 있음.
 */

{
  const obj = {
    name: 'bon',
  };

  obj.name; // bon
  obj['name']; //bon

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = '오직 스트링만 할당할 수 있다.';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; //Animal에 있는 모든 key의 타입을 Keys로 할당하는 것
  // 'name' | 'age' | 'gender'

  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'bon',
    gender: 'female',
  };
}
