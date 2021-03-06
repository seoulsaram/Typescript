{
  //   //JavaScript๐ฉ
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScriptโจ
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript๐ฉ
  //   function jsFetchNum(id) {
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //TypeScriptโจ
  //   function FetchNum(id: string): Promise<number> {
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //JavaScript => TypeScript (ํ์์ด ๋ํด์ง ํจ์ ์ ์ ๋ฐฉ๋ฒ)
  // 1. Optional parameter : ํ์์คํฌ๋ฆฝํธ์์๋ ํ๋ผ๋ฏธํฐ์ ๊ฐฏ์, ํ์์ ์ ํด๋จ๋ค๋ฉด
  // ํด๋น ํจ์๋ฅผ ๋ถ๋ฅผ ๋, ์ด ํ๋ผ๋ฏธํฐ ๊ฐฏ์, ํ์์ด ๋ง์ง ์์ผ๋ฉด ์๋ฌ๊ฐ ๋ฐ์ํ๋ค.
  // ๊ทธ๋ฐ๋ฐ ์ ๋ง๋ก ์ด๋ค ํ๋ผ๋ฏธํฐ๊ฐ ๋ค์ด์ฌ์ง ์ ์ ์์ด์ ํ๋ผ๋ฏธํฐ๋ฅผ ์ต์(์์ด๋ ๋๊ณ  ์์ด๋ ๋๋)์ผ๋ก ์ฃผ๊ณ  ์ถ๋ค๋ฉด?
  // ๋ฌผ์ํ'?'๋ฅผ ๋ถ์ฌ์ค๋ค.
  //๐นstrictํ๊ฒ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ๋ ๋ฒ์ 
  //   function printName(firstName : string, lastName: string){
  //       console.log(firstName);
  //       console.log(lastName);
  //   }
  //   printName('Steve', 'Jobs');
  //   printName('Ellie', 0);

  //๐์ต์๋ํ๊ฒ ํ๋ผ๋ฏธํฐ ๋ฐ๋ ๋ฒ์ 
  //์๋์ ๊ฐ์ด ?๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด lastName์ด๋ผ๋ ํ๋ผ๋ฏธํฐ๋ ๋ฐ์ ์๋, ๋ฐ์ง ์์ ์๋ ์๋ค๋ ๋ป.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  //2. Default parameter : ํ๋ผ๋ฏธํฐ ๊ฐ์ด null์ผ ๊ฒฝ์ฐ ์๋์ผ๋ก ์ธํํด์ค ๊ฐ
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // 3. Rest parameter : ํ๋ผ๋ฏธํฐ ๊ฐฏ์๋ฅผ ์ ํ์ง ์๊ณ  ์ฌ๋ฌ๊ฐ ๋ฐ์ ์ ์์. ๋ค๋ง ๋ฐ์์ ธ์จ ํ๋ผ๋ฏธํฐ๋ ๋ฐฐ์ดํํ๋ก ๋ฐ์์ง.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
