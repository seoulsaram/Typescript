namespace Union {
  //Union Types : OR(|)
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); //보낼 수 있는 문자열이 left, right, up, down에 한정됨

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  //function: login -> success, fail (로그인 함수는 성공할 수도, 실패할 수도 있는데, 그에 따른 response를 리턴한다)
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  //printLoginState(state:LoginState)
  //success -> body
  //fail -> reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`✨${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
  //보편적으로 많이 사용하는 방법이나, 좋은 방법은 아니다. 더 나은 로직은 1-6에서!
}
