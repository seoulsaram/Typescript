//😄 my solution
{
  class CoffeeCup {
    shots: number;
    hasMilk: boolean;
    constructor(shots: number, hasMilk: boolean) {
      this.shots = shots;
      this.hasMilk = hasMilk;
    }
  }
  class CoffeeMachine {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans * this.BEANS_GRAMM_PER_SHOT;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return new CoffeeCup(shots, false);
    }
  }

  const coffee = new CoffeeMachine(3);
  console.log(coffee.makeCoffee(2));
}

//✨✨✨ellie's solution✨✨✨
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //static : class level
    //BEANS_GRAMM_PER_SHOT는 인스턴스를 몇 번 생성하든, 변하지 않고 똑같은 값을 유지하는 값이므로
    //인스턴스를 생성할 때마다 매번 생성 시킬 필요가 없다.
    //(coffeeBeans는 호출할 때마다 값이 변할 수 있으므로 매번 생성하도록 해주어야 하지만)
    //이런 경우 인스턴스 생성 시마다 BEANS_GRAMM_PER_SHOT가 같이 만들어지면 메모리가 낭비되므로
    //static을 붙여준다. static은 class level으로, 클래스와 연결이 되어있으므로
    //모든 인스턴스가 공유되고, 오브젝트마다 생성되지 않는다.
    //사용할 때는 class자체에 있는 것이므로 클래스이름.변수명 으로 사용해준다.
    coffeeBeans: number = 0; //instance(object) level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //오브젝트마다 새로 만들어져야되는 데이터가 있다면 멤버변수로 만들면 되고,
    //클래스 레벨에서 함께 공유될 수 있는 것이라면 static을 이용하면 된다.

    //CoffeeMaker인스턴스를 리턴하는 메소드를 static으로 만들어서
    //사용할 때마다 new로 인스턴스를 생성하지 않을 수 있도록 이렇게 static메소드를 만들어 볼 수도 있다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3);
  //static 메소드도 마찬가지로 클래스명.메소드이름();으로 사용한다.
}
