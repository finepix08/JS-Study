import React, {Component} from 'react'


class AddTodo extends Component {
    

    render() {
        return (
            <section>
                <p>Name:</p>
                <input type="text" onChange={this.props.onChangeText} value={this.props.valueText} />
                <p>Count:</p>
                <input type="number" onChange={this.props.onChangeNumber} value={this.props.valueNumber}/>
                <button onClick={this.props.Add}>add</button>
                <input type="text" placeholder='filter' onChange={this.props.onChangeFilter}
                 value={this.props.valueFilter} />
            </section>
        )
    }
}

export default AddTodo