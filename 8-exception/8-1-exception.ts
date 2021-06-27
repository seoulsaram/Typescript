// Java : Exception 클래스 오브젝트가 있음.
// Javascript : Error 라는 클래스가 있음.

// const array = new Array(1000000000000000000000);

// Error(Exception) Handling: try - catch - finally 3가지 단계를 거침

//에러를 던질 땐  디테일한 정보를  메세지로 전달해서 사용자가 왜 에러가 발생했는지 이해할 수 있도록 하는 것이 좋다.
function readFile(fileName: string): string {
  if (fileName === 'not exist! 💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents 📖';
}

function closeFile(file: string) {
  //
}

//✨finally를 사용해야 하는 이유 :
//catch까지만 작성하고, 마지막에 반드시 처리해야 하는 작업을 finally문 안에 넣지 않았을 경우
//그리고 catch문 안에서 에러 발생 시 return을 하거나 다른 에러를 발생하는 로직이 있을 경우
//finally문이 아닌 밖에 작성한 코드는 실행되지 않아버린다.
//그래서 에러가 발생했든 하지 않았든 반드시 실행되어야 하는 연관된 로직이 있다면
//finally안에 코드를 작성하는 것이 바람직하다. (반드시 실행됨을 보장하기 때문임.)
//또한 try-catch는 에러가 반드시 발생하는 그 구간에서만 사용하는 것이 올바르다.
function run() {
  const fileName = 'not exist! 💩';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!`);
    return;
  } finally {
    closeFile(fileName);
    console.log('finally!');
  }
}

run();
