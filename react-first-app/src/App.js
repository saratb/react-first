import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';

class App extends Component {

  state = { // JavaScript Object
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false

      },
      {
        id: 2,
        title: 'Dinner with family',
        completed: true

      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false

      }
    ] // Array of Objects
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    console.log(this.state.todos);
    return ( //Return a JSX File // Adding a prop
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
