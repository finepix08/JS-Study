const list = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), text: action.text, number: action.number}]
        case 'REMOVE':
            let index = state.findIndex(list1=>list1.id===action.id)
            return [...state.slice(0, index),...state.slice(index+1)]
        default:
            return state
    }
}

export default list