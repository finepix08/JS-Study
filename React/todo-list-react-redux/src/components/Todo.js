import React, {Component} from 'react'
import store from '../store/store'

class Todo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}{this.props.getState().currentNumber}/{this.props.number}</p>
                <button onClick={()=>this.props.store.dispatch({type: 'INCREMENT', number: this.props.number})}>Up</button>
                <button onClick={()=>this.props.store.dispatch({type: 'DECREMENT'})}>Down</button>
                <button onClick={()=>this.props.store.dispatch
                    ({type: 'REMOVE', id: this.props.key})}>Remove</button>
            </div>
        )
    }
}

export default Todo