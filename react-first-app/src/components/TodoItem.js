// In this file <p> {this.props.todo.title} </p> will get the props from the map from App.js where the title name is included
import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* For inline styling we use double curely braces  (For BG Color) */
export class TodoItem extends Component {

/* One way of writing the dashline
  getStyle = () => {
    if(this.props.todo.completed){
        return{
          textDecoration: 'line-through'
        }
      }else {
        return{
          textDecoration: 'none'
        }
      }
    }
*/
  /* If this is true (?) then line through : (else) none */
  getStyle = () => {
    return{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }



  render() {
    return (
      <div style ={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete}/> {' '}
        <p> {this.props.todo.title} </p>
      </div>
    )
  }
}

/* This is to define the prop types*/
TodoItem.propTypes ={
  todos: PropTypes.object.isRequired
}


/* Item Style css
const itemStyle = {
  backgroundColor: '#f4f4f4'
}*/

export default TodoItem
