//상속의 문제점
/* 
상속의 깊이가 깊어질 수록 서로간의 관계가 복잡해질 수 있다.
상속의 치명적 문제는 내가 어떤 부모클래스의 행동을 수정하게 되면
수정된 사항때문에 이것을 상속하는 모든 자식 클래스에 영향을 미칠 수 있다.
또한 타입스크립트에서는 한가지 이상의 클래스를 상속할 수 없다.
대안으로 composition을 사용하는 것이 좋다.
composition은 필요한 기능들을 만들어놓고 dependency injection을 통해 사용하는 것을 말함.
*/

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //커피머신
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number, private sugar: SugarProvider, private milkForther: MilkFrother) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkForther.makeMilk(sugarAdded);
    }
  }

  //우유 인터페이스
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  //설탕 인터페이스
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //우유 거품기들
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Coldening some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //설탕 제조기들
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar 🍪');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar🍧');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //각각의 milk, sugar머신들의 명세를 interface로 정의해두고, 각 커피머신들에 필요한 재료를 공급하는
  //sugar, milk머신들 또한 interface로 정의해두면 아래와 같이 다양한 sugar, milk머신들을 전달 할 수 있게 된다.
  const latteMachine = new CoffeeMachine(12, noSugar, fancyMilkMaker);
  const coldLatteMachine = new CoffeeMachine(12, sugar, coldMilkMaker);
}
