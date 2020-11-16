import {ADD_TODO, DELETE_TODO,DONE_TODO, UNDO_TODO} from './constants'
export var addTodo = (todoObject) => {
    return{
        type : ADD_TODO,
        payload: {
            todo : todoObject
        }
    }
}

export var deleteTodo = (todoId) => {
    return{
        type : DELETE_TODO,
        payload: {
            todoId : todoId
        }
    }
}

export var doneTodo = (todoId) => {
    return{
        type : DONE_TODO,
        payload: {
            todoId : todoId
        }
    }
}

export var undoDoneTodo = (todoId) => {
    return{
        type : UNDO_TODO,
        payload: {
            todoId : todoId
        }
    }
}

