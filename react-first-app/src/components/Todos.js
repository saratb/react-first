// This is actually a JSX File
import React, { Component } from 'react';
import TodoItem from './TodoItem';

// Map fucntion return an array from and array

class Todos extends Component {
  render() {
    // console.log(this.props.todos); //Printing all the Todos
      return this.props.todos.map((todo) => (
        <TodoItem /> // Outputting the 3 props ID from App.js // Getting the output from TodoItem
      ))
  }
}

export default Todos;
