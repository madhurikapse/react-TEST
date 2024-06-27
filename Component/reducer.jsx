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
        
        case DELETETODO:
            return {
                ...state,
                todos: state.todos
                    .map((todo, index) =>
                        index === action.payload ? { ...todo, deleted: true } : todo
                    )
                    .filter((todo) => !todo.deleted),
            };
        default:
            return state;
    }
};

export default reducer;
