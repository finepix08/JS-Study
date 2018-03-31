import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    list: [
        {id:1, text: 'Картоха', number: 5},
        {id:2, text: 'Сыр', number: 2},
        {id:3, text: 'Платье', number: 1},
        {id:4, text: 'Сковорода', number: 2},
        {id:5, text: 'Карандаши', number: 4}
    ],
    filter: ''
};

const store = createStore(reducer, initialState)

export default store