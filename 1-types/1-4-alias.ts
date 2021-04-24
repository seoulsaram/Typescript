{
  //Type Aliases
  //타입을 내가 정의할 수 있다!
  type Text = string;
  const name: string = 'ellie';
  const name2: Text = 'gayeon';
  const address: Text = '대한민국 서울';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  //이러게 하면 에러
  // const student : Student = {
  //     animal: 'dog'
  // }
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  //String Literal Types : 타입을 문자열로 지정할 수도 있음
  type Name = 'name';
  let ellieName: Name;
  //ellieName = 'json'; => 에러
  ellieName = 'name'; //name만 할당할 수 있음

  type Boal = true;
  const isCat: Boal = true; //true만 할당 가능
}
