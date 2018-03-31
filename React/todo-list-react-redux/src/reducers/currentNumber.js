const currentNumber = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return (state!==action.number) ? state+1 : state;
         case 'DECREMENT':
            return (state<=1) ? state-1 : state;        
    }
}

export default currentNumber