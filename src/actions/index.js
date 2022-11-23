import * as types from "./actionTypes"

export const addTodo = (data) => {
    return {
        type: types.ADD_TODO,
        payload: {
            id: new Date().getUTCMilliseconds(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export const editTodo = (id, data) => {
    return {
        type: types.EDIT_TODO,
        id: id,
        data: data
    }
}

export const removeList = () => {
    return {
        type: types.REMOVE_LIST
    }
}