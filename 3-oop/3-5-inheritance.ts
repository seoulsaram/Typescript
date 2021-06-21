{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //interface를 사용하여 class의 명세를 작성한다. 해당 클래스에서 어떤 메소드를 구현할 것인지 정의할 수 있다.
  //이 interface를 구현한 클래스는 interface에 명시된 메소드들을 반드시 갖고있어야 (구현해야)한다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //일반 커피머신
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater then 0');
      }
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

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

  //CoffeeMachine을 상속받은 클래스
  class CoffeeLatteMachine extends CoffeeMachine {
    //자식 클래스에서도 생성자를 만들어 새로운 데이터를 추가로 받고싶다면
    //무조건 부모생성자인 super를 호출해야 한다.
    //또한 부모생성자가 받고있는 인자도 기본적으로 표시해주어야 함.(여기선 beans:number)
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    //부모클래스의 메소드(makeCoffee)를 자식클래스에서 덮어씌울 수 있다 (overwriting)
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //부모클래스의 메소드를 그대로 사용하고 싶을 때
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CoffeeLatteMachine(23, 'serial:12345');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
