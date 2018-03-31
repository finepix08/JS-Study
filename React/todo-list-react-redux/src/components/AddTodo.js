import React, {Component} from 'react'


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state({
            valueText: '',
            valueNumber: 0,
        })
    }
    

    render() {
        return (
            <section>
                <p>Name:</p>
                <input type="text" onChange={this.onChangeText} value={this.state.valueText} />
                <p>Count:</p>
                <input type="number" onChange={this.onChangeNumber} value={this.state.valueNumber}/>
                <button onClick={this.props.Add}>add</button>
                <input type="text" placeholder='filter' onChange={this.onChangeFilter}
                 value={this.props.store.getState().filter} />
            </section>
        )
    }

    Add() {
        this.props.store.dispatch({type: 'ADD', text: this.state.valueText,
         number: this.state.valueNumber})
    }

    onChangeText(e) {
        this.setState({valueText: e.target.value})
    }

    onChangeNumber(e) {
        this.setState({valueNumber: e.target.value})
    }

    onChangeFilter(e) {
        this.props.store.dispatch({type: 'FILTER_CHANGED', filter: e.target.value})
    }
}

export default AddTodo