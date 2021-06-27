{
  //예상치 못한 error를 처리할 때, 아래와 같이 여러 군데에서 에러가 발생한다면 과연 어디서 에러핸들링을 하는 것이 맞을까?
  //정답은 없지만, 에러핸들링을 통해 유의미한 작업을 할 수 있는 곳에서 에러핸들링을 하는 것이 맞다.

  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new TimeoutError('no network');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      //login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        //show dialog to uer
      }
    }
  }
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
