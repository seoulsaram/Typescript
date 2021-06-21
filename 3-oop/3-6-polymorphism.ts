{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; //?를 붙여서 옵셔널로 만들기
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

  //CoffeeMachine을 상속받은 클래스 (라떼 만들 수 있음)
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
        hasSugar: false,
      };
    }
  }

  //설탕 커피 만들기
  class SweetCoffeeMaker extends CoffeeMachine {
    private sugar: number = 0;
    constructor(beans: number, sugar: number) {
      super(beans);
      this.sugar = sugar;
    }
    private addSugar(): void {
      console.log(`Adding ${this.sugar} spoons of sugars`);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasMilk: false,
        hasSugar: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CoffeeLatteMachine(23, 'serial:12345');
  const sugarMachine = new SweetCoffeeMaker(23, 4);
  //   const coffee = latteMachine.makeCoffee(1);
  //   console.log(coffee);
  //   console.log(latteMachine.serialNumber);
  //   const sugarCoffee = sugarMachine.makeCoffee(1);
  //   console.log(sugarCoffee);

  //머신들을 배열에 넣어서 forEach로 자동으로 만들기
  //machines의 타입을 CoffeeMaker배열로 정의하면 CoffeeMaker에 규약된 메서드만 사용할 수 있고,
  //CoffeeMachine배열로 정의하면 CoffeeMachine에 만들어져있는 메서드를 모두 사용할 수 있다.
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CoffeeLatteMachine(15, 'Serial:3322'),
    new SweetCoffeeMaker(13, 2),
  ];
  machines.forEach((machine) => {
    console.log('--------------');
    machine.makeCoffee(1);
    //다형성의 장점이 바로 이것.
    //makeCoffee라는 모든 머신이 공유하는 메서드를 통해서 여러개의 커피를 만들 수 있음
  });
}
