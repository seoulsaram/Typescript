Array; /* ๐ every๋ ๋๊ฐ์ง ์ธ์๋ฅผ ๋ฐ๋๋ฐ, ์ฒซ๋ฒ์งธ ์ธ์๋ ์ฝ๋ฐฑํจ์์ด๊ณ , ๋๋ฒ์งธ๋ thisArg์ด๋ค.

/* โจ ๊ฐ์ ์ด๋ฆ์ ๋ฉ์๋๊ฐ ๋๊ฐ ์ ์๋์ด ์๋ค. 
    ์ด๊ฒ์ overloading์ผ๋ก, ๊ฐ์ ์ด๋ฆ์ ๋ฉ์๋์ด์ง๋ง, ์ด๋ค ์ธ์๋ฅผ
    ์ ๋ฌํ๋์ ๋ฐ๋ผ ์ฒซ๋ฒ์งธ ๊ฒ์ด ํธ์ถ๋  ์๋, ๋๋ฒ์งธ ๊ฒ์ด ํธ์ถ๋  ์ ๋ ์๋ค.
*/
//concat(...items: ConcatArray<T>[]): T[];
/* ๐ ...items๋ ์ํ๋ ๋งํผ์ ์ธ์๋ฅผ ์ ๋ฌํ  ์ ์๋ค๋ ๋ป.
    ConcatArray๋ผ๊ณ  ํ๋ ๋ฐ์ดํฐํ์์ ๋ฐฐ์ด์ ์ํ๋ ๊ฐฏ์๋งํผ ์ ๋ฌํ  ์ ์๊ณ ,
*/
//concat(...items: (T | ConcatArray<T>)[]): T[];

//every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
/*  ๐ ์ฝ๋ฐฑํจ์๋ ์ด 3๊ฐ์ง ์ธ์๋ฅผ ๋ฐ๊ณ ์๋ค.
    ๋ฆฌํด๋๋ ํ์์ unknown์ผ๋ก, ์ฐ๋ฆฌ๊ฐ ์ด๋ค ํ์์ด ๋ฆฌํด๋ ์ง ์ ์ ์๋ค.
 */

//every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
/*  
   ๐ ์ฝ๋ฐฑํจ์์์๋ value๊ฐ T์ธ๋ฐ, value๊ฐ S์ธ์ง ์๋์ง ํ์ธํ๋ ํจ์์ด๋ค. 
    ์ฌ๊ธฐ์ S๋ T๋ฅผ ์์๋ฐ๋ ํ์์
*/

//๋๋ฒ์งธ every api ํ์คํธํด๋ณด๊ธฐ
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

//Animalํ์์ ๋ฐฐ์ด์ ๋ง๋ ๋ค.
const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

//isCatํจ์๋ Animalํ์์ ์ธ์๋ฅผ ๋ฐ๊ณ , ์ด๊ฒ์ด Cat์ธ์ง ์ฒดํฌํ๋ค.
//๋ชจ๋  ์ธ์๋ฅผ Cat์ผ๋ก castingํ ๋ค, ์์ isCat์ด๋ผ๋ ํ๋กํผํฐ๊ฐ undefined๊ฐ ์๋ ๊ฒ์ ๋ฆฌํดํ๋ค.
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

//every๊ฐ ๋ฐ๋ ํ์์ Cat์ผ๋ก ๋ฐ๊ณ , ์ฝ๋ฐฑํจ์ isCat ์คํ
console.log(animals.every<Cat>(isCat));
