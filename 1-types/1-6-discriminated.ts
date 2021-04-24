{
  //discriminated union : 유니온 타입에 차별화 되는, 이름이 동일한 타입을 둠으로써, 간편하게 구분할 수 있는 것.

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  //printLoginState(state:LoginState)
  //success -> body
  //fail -> reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
}
