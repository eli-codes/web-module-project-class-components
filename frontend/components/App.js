import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: true,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: true,
        },
        {
          task: "Mow the lawn",
          id: 1528817084358,
          completed: true,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>

        <ul>
          {todos.map((todo) => {
            return (
              <li>
                {todo.task}{" "}
                {todo.completed ? <span>- completed</span> : <span></span>}
              </li>
            );
          })}
        </ul>

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}

export default App;
