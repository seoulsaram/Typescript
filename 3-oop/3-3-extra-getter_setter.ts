{
  //getter and setter
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); //=>Steve Jobs
  user.firstName = 'Ellie';
  console.log(user.fullName); //=>Steve Jobs
  //firstName에 다른 이름을 넣었는데도 불구하고 똑같이 Steve Jobs가 나오는 이유?
  //fullName이 설정된 이후로는, firstName이나 lastName이 변경되어도 다시 fullName이 계산되지 않고
  //한 번 할당되면 계속 지정되어 있기 때문이다.
  //const user2 = new User('Ellie', 'Jobs'); 이렇게 객체를 새로 생성해야만 다시 계산된다.

  //이렇게 하면 fullName을 호출하는 시점에 fullName을 계산할 수 있다.
  //get은 함수형태로 작성하지만, 사용할때는 멤버변수를 사용할 때처럼 불러야 한다.
  class User2 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('나이는 0보다 커야 합니다.');
      }
      this.internalAge = num;
    }

    //constructor의 인자에 private을 붙여주면 자동으로 field가 됨
    constructor(public firstName: string, private lastName: string) {}
  }

  const user2 = new User2('Steve', 'Jobs');
  console.log(user2.fullName); //=>Steve Jobs
  user2.firstName = 'Ellie';
  console.log(user2.fullName); //=>Ellie Jobs

  user2.age = 6;
}
