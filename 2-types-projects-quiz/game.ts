/**
 * Let's make a game 🕹
 */

type Option = 'up' | 'down' | 'left' | 'right';
let position = {x: 0, y: 0};
function move(command: Option) {
  switch (command) {
    case 'up':
      position.y += 1;
      return position;
    case 'down':
      position.y -= 1;
      return position;
    case 'left':
      position.x -= 1;
      return position;
    case 'right':
      position.x += 1;
      return position;
    default:
      throw new Error('unknown error');
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

//함수 내부에서 값을 수정하기 때문에 return값을 적어주지 않는다.
function move_ellie(direction: Option) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move_ellie('up');
console.log(position); // { x: 0, y: 1}
move_ellie('down');
console.log(position); // { x: 0, y: 0}
move_ellie('left');
console.log(position); // { x: -1, y: 0}
move_ellie('right');
console.log(position); // { x: 0, y: 0}
