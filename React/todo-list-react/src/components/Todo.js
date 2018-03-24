import React, {Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNumber: 0,
            list: this.props.list
        }

        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
    }

    render() {
        return (
            <div>
                <p>{this.props.text}{this.state.currentNumber}/{this.props.number}</p>
                <button onClick={()=>this.Increment(this.props.list1.id)}>Up</button>
                <button onClick={this.Decrement}>Down</button>
                <button onClick={()=>this.props.Remove(this.props.list1.id)}>Remove</button>
            </div>
        )
    }

    Increment(id) {
        if (this.state.currentNumber<this.props.number) {
            this.setState({currentNumber: this.state.currentNumber+1})
        }
        if (this.state.currentNumber===this.props.number) {
            let list = this.props.list
            let index = list.findIndex(t=> t.id===id)
            this.setState( {list: [...list.slice(0,index),...list.slice(index+1)]})
            
        }
    }

    Decrement() {
        if (this.state.currentNumber>=1) {
            this.setState({currentNumber: this.state.currentNumber-1})
        }
    }
        
}

export default Todo