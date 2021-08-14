// type을 조건적으로 정할 수 있는  conditional type

type Check<T> = T extends string ? boolean : number;
//T가 만약 string을 상속받는 타입이라면 타입을 boolean으로 하고, 아닌 경우라면 number로.
type Type = Check<string>; //boolean
type NumType = Check<object>; //number

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';
type T0 = TypeName<string>; // "string"
type T1 = TypeName<'a'>; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"

type T10 = TypeName<string | (() => void)>; // "string" | "function"
type T12 = TypeName<string | string[] | undefined>; // "string" | "object" | "undefined"
type T11 = TypeName<string[] | number[]>; // "object"
