// This is actually a JSX File
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Map fucntion return an array from and array


class Todos extends Component {
  render() {
    // console.log(this.props.todos); //Printing all the Todos
      return this.props.todos.map((todo) => (
        <TodoItem key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} />  /* Outputting the 3 props ID from App.js */
        /* Getting the output from TodoItem */
      ))
  }
}

/* This is to define the prop types*/
Todos.propTypes ={
  todos: PropTypes.array.isRequired
}

export default Todos;
