import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
    
    render() {
        
        let listCopy = this.props.store.getState().list
            .filter(t => t.text.includes(this.props.store.getState().filter))
            .map(t => (<Todo list1={t} text={t.text} number={t.number} key={t.id}/>))
       
        
        return (
            <section>
                {listCopy}
            </section>
        )
    }
}

export default TodoList