import React, {Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNumber: 0,

        }

        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
    }

    render() {
        return (
            <div>
                <p>{this.props.text}{this.state.currentNumber}/{this.props.number}</p>
                <button onClick={this.Increment}>Up</button>
                <button onClick={this.Decrement}>Down</button>
                <button onClick={()=>this.props.Remove(this.props.list1.id)}>Remove</button>
            </div>
        )
    }

    Increment() {
        if (this.state.currentNumber<this.props.number) {
            this.setState({currentNumber: this.state.currentNumber+1})
        }
        if (this.state.currentNumber===this.props.number-1) {
            this.props.Remove(this.props.list1.id)
        }

    }

    Decrement() {
        if (this.state.currentNumber>=1) {
            this.setState({currentNumber: this.state.currentNumber-1})
        }
    }
        
}

export default Todo