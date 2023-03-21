import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  handleAdd = (task) => {
    //1. SetState
    //2. Changetodos
    //3. MAke a copy todos
    //4. Add a new todo to the end of oiur todo list.

    const newTodo = {
      task: task,
      id: Date.now(),
      coompleted: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleClear = () => {
    //1. Set State
    //2. loop through all todos
    //3. remove all todos that have completed === true
    //4. save filtered todos to state.

    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    //1. setState.
    //2. Change todos.
    //3. Find the todo that we clicked on.
    //4. Flip the value of completed for that todo.
    //5. We want to keep all other todos the same.

    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />

        <TodoForm handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
