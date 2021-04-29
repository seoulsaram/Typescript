{
  //사용자가 유효하지 않은 값을 입력하여 프로그램을 유효하지 않게 만들 수 있는 위험을 차단해야 한다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public, private, protected(외부에서는 접근할 수 없지만, 이 클래스를 상속한 자식 클래스에서만 접근이 가능.)
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // constructor를 private으로 둔다는 것은, 사용자가 new를 통해 인스턴스 만드는 것을 방지하겠다는 것이다.
    // 그러면 사용자는 CoffeeMaker를 입력했을 때 추천되는 메소드 목록들을 보며 어떻게 사용해야 하는지 유추할 수 있다.
    private constructor(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater then 0');
      }
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // fillCoffeeBeans(beans: number) {
    //   if (beans < 0) {
    //     throw new Error('value for beans should be greater then 0');
    //   }
    //   this.coffeeBeans += beans;
    // }

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

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);
  //maker.fillCoffeeBeans(32);
}
