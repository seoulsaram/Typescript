//๐ my solution
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

//โจโจโจellie's solutionโจโจโจ
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //static : class level
    //BEANS_GRAMM_PER_SHOT๋ ์ธ์คํด์ค๋ฅผ ๋ช ๋ฒ ์์ฑํ๋ , ๋ณํ์ง ์๊ณ  ๋๊ฐ์ ๊ฐ์ ์ ์งํ๋ ๊ฐ์ด๋ฏ๋ก
    //์ธ์คํด์ค๋ฅผ ์์ฑํ  ๋๋ง๋ค ๋งค๋ฒ ์์ฑ ์ํฌ ํ์๊ฐ ์๋ค.
    //(coffeeBeans๋ ํธ์ถํ  ๋๋ง๋ค ๊ฐ์ด ๋ณํ  ์ ์์ผ๋ฏ๋ก ๋งค๋ฒ ์์ฑํ๋๋ก ํด์ฃผ์ด์ผ ํ์ง๋ง)
    //์ด๋ฐ ๊ฒฝ์ฐ ์ธ์คํด์ค ์์ฑ ์๋ง๋ค BEANS_GRAMM_PER_SHOT๊ฐ ๊ฐ์ด ๋ง๋ค์ด์ง๋ฉด ๋ฉ๋ชจ๋ฆฌ๊ฐ ๋ญ๋น๋๋ฏ๋ก
    //static์ ๋ถ์ฌ์ค๋ค. static์ class level์ผ๋ก, ํด๋์ค์ ์ฐ๊ฒฐ์ด ๋์ด์์ผ๋ฏ๋ก
    //๋ชจ๋  ์ธ์คํด์ค๊ฐ ๊ณต์ ๋๊ณ , ์ค๋ธ์ ํธ๋ง๋ค ์์ฑ๋์ง ์๋๋ค.
    //์ฌ์ฉํ  ๋๋ class์์ฒด์ ์๋ ๊ฒ์ด๋ฏ๋ก ํด๋์ค์ด๋ฆ.๋ณ์๋ช ์ผ๋ก ์ฌ์ฉํด์ค๋ค.
    coffeeBeans: number = 0; //instance(object) level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //์ค๋ธ์ ํธ๋ง๋ค ์๋ก ๋ง๋ค์ด์ ธ์ผ๋๋ ๋ฐ์ดํฐ๊ฐ ์๋ค๋ฉด ๋ฉค๋ฒ๋ณ์๋ก ๋ง๋ค๋ฉด ๋๊ณ ,
    //ํด๋์ค ๋ ๋ฒจ์์ ํจ๊ป ๊ณต์ ๋  ์ ์๋ ๊ฒ์ด๋ผ๋ฉด static์ ์ด์ฉํ๋ฉด ๋๋ค.

    //CoffeeMaker์ธ์คํด์ค๋ฅผ ๋ฆฌํดํ๋ ๋ฉ์๋๋ฅผ static์ผ๋ก ๋ง๋ค์ด์
    //์ฌ์ฉํ  ๋๋ง๋ค new๋ก ์ธ์คํด์ค๋ฅผ ์์ฑํ์ง ์์ ์ ์๋๋ก ์ด๋ ๊ฒ static๋ฉ์๋๋ฅผ ๋ง๋ค์ด ๋ณผ ์๋ ์๋ค.
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
  //static ๋ฉ์๋๋ ๋ง์ฐฌ๊ฐ์ง๋ก ํด๋์ค๋ช.๋ฉ์๋์ด๋ฆ();์ผ๋ก ์ฌ์ฉํ๋ค.
}
