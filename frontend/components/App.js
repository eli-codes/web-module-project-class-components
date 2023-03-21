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
        {
          task: "Mow the lawn",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>

        <TodoList todos={todos} />

        <TodoForm todos={todos} />

        <button>Clear</button>
      </div>
    );
  }
}

export default App;
