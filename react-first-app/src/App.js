import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
//import { v4 as uuidv4 } from 'uuid';

import "./App.css";
import  axios from 'axios';


class App extends Component {

  state = { // JavaScript Object
    todos: [] // Array of Objects
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
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

    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
        !== id)] }));
    
  }

  // Add Todo
  addToDo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
      })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  }

  render() {
    console.log(this.state.todos);
    return ( //Return a JSX File // Adding a prop
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo = {this.delTodo}/>
            </React.Fragment>
          )} />
            <Route path="/about" component={About} />

        </div>
      </div>
      </Router>
    );
  }
}

export default App;

//Locating to the exat path using the /about
