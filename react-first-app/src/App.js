import React, { Component } from "react";
import "./App.css";
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';


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

  //Delete todo (Spread operator [...])
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !== id)]})
  }

  // Add Todo
  addToDo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos);
    return ( //Return a JSX File // Adding a prop
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
