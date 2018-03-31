import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


class App extends Component {

  render() {  
    
    return (
      <section>
        <AddTodo/>
        <TodoList/>
      </section>
    );
  }

  

}

export default App;
