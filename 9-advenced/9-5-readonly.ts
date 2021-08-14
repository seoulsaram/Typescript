{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = 'jajaj';
  }

  /**
   * 9-3-map.ts에서 구현했던 type변경하는 함수들은 이미
   * utility 함수로 아래와 같이 다 만들어져있다.
   * Readonly
   * type Readonly<T> = {
   * readonly [P in keyof T]: T[P];
   * };
   *
   * type Required<T> = {
   *  [P in keyof T]-?: T[P];
   * };
   * 여기서 마이너스기호 '-?'는 옵셔널이 아닌, 절대 있어야 하는 것을 나타냄.
   * 그래서 optional인 경우 반대로 꼭 있어야 하는 타입으로 변환해 줌.
   */
}
