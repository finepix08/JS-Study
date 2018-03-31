import {combineReducers} from 'redux'
import list from './list'
import currentNumber from './currentNumber'
import filter from './filter'

const reducer = combineReducers({list, currentNumber, filter});

export default reducer