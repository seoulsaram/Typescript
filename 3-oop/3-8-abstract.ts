/* 상속 클래스를 이용할 때 어떤 특정 자식 클래스에서만 기능이 달라질 경우 추상클래스를 이용해 볼 수 있다.
1.추상클래스의 오브젝트는 만들 수 없음
1. 추상클래스에서 메서드 앞에 abstract를 붙여, 해당 메서드가 추상 매서드임을 명시할 수 있음.
1. 추상메서드는 말 그대로 추상적인 메서드이기 때문에 내부 구현사항을 작성하지 않음.
 */

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  //coffee machine interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //일반 커피머신(abstract)
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater then 0');
      }
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log(`heating up...`);
    }

    protected abstract extract(shots: number): CoffeeCup;

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log(`cleaning the Machine`);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //CoffeeMachine을 상속받은 클래스 (라떼 만들 수 있음)
  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk...');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //부모클래스의 메소드를 그대로 사용하고 싶을 때
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
        hasSugar: false,
      };
    }
  }

  //설탕 커피 만들기
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const latteMachine = new CoffeeLatteMachine(23, 'serial:12345');
  const sugarMachine = new SweetCoffeeMaker(23);

  const machines: CoffeeMaker[] = [new CoffeeLatteMachine(15, 'Serial:3322'), new SweetCoffeeMaker(13)];
  machines.forEach((machine) => {
    console.log('--------------');
    machine.makeCoffee(1);
  });
}
