// src/redux/reducers.js
import { ADDTODO, DELETETODO } from './action';

const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return {

                ...state,
                todos: [...state.todos, { text: action.payload}],
            };

        default:
         return state
    }
};

export default reducer;
