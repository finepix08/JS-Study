import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
    
    render() {
        
        let listCopy = this.props.list
            .filter(t => t.text.includes(this.props.valueFilter))
            .map(t => (<Todo list={this.props.list} list1={t} text={t.text} number={t.number} key={t.id} Remove={this.props.Remove}/>))
       
        
        return (
            <section>
                {listCopy}
            </section>
        )
    }
}

export default TodoList