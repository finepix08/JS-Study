import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        list: [
            {id:1, text: 'Картоха', number: 5},
            {id:2, text: 'Сыр', number: 2},
            {id:3, text: 'Платье', number: 1},
            {id:4, text: 'Сковорода', number: 2},
            {id:5, text: 'Карандаши', number: 4}
        ],
        valueText: '',
        valueNumber: '0',
        valueFilter: ''
    }

    this.Add = this.Add.bind(this)
    this.Remove = this.Remove.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeNumber = this.onChangeNumber.bind(this)
    this.onChangeFilter = this.onChangeFilter.bind(this)
  }

  Add() {
    let list = this.state.list
    this.setState({list: [...list, {id:Date.now(), text:this.state.valueText,
       number:this.state.valueNumber}]})
  }

  Remove(id) {
    let list = this.state.list
    let index = list.findIndex(t=> t.id===id)
    this.setState( {list: [...list.slice(0,index),...list.slice(index+1)]})
  }

  onChangeText(e) {
    this.setState({valueText: e.target.value})
  }

  onChangeNumber(e) {
    this.setState({valueNumber: e.target.value})
  } 

  onChangeFilter(e) {
    let list = this.state.list
    this.setState({valueFilter: e.target.value})
  }

  

  render() {  
    let list = this.state.list
    return (
      <section>
        <AddTodo Add={this.Add} valueText={this.state.valueText} valueNumber={this.state.valueNumber}
         onChangeText={this.onChangeText} onChangeNumber={this.onChangeNumber}
         valueFilter={this.state.valueFilter} onChangeFilter={this.onChangeFilter}/>
        <TodoList list={list} Remove={this.Remove} valueFilter={this.state.valueFilter}/>
      </section>
    );
  }

  

}

export default App;
