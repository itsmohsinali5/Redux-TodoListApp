import * as types from '../actions/actionTypes';

const initialState = {
    list: []
}

const TodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case types.DELETE_TODO:
            const newList = state.list.filter((item) => item.id != action.id);
            console.log('New List', newList);
            return {
                ...state,
                list: newList
            }

        case types.EDIT_TODO:
            const updatedArr = [];
            state.list.map((item) => {
                if(item.id === action.id) {
                    item.id = action.id;
                    item.data = action.data;
                }
                updatedArr.push(item);
            })
            return {
                ...state,
                list: updatedArr
            }

        case types.REMOVE_LIST:
            return {
                ...state,
                list: []
            }

        default: return state;
    }
}

export default TodoReducer;