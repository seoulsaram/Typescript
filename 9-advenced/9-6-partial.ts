{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    //Partial을 사용하면 받을 인자가 Todo안에 있는 것들에 속해야 한다.
    return {...todo, ...fieldsToUpdate}; //기존의 todo를 복사하고, filedsToUpdate는 덮어쓴다.
  }

  const todo: Todo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const updated = updateTodo(todo, {priority: 'low'});
  console.log(updated);
}
