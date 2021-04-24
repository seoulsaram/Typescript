{
  // Intersection Type: &같은 개념. 이거랑 그리고 저거

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    //Student & Worker => person이라는 인자는 Student이면서 Worker이기도 하다 라는 뜻.
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'gayeon',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
  //그래서 인자를 전달할 때는 Student와 Worker에 해당하는 모든 값을 보내주어야 한다.
}
