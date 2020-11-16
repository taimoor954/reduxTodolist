import React from 'react'
import {ADD_TODO} from './constants'
import {DELETE_TODO, DONE_TODO, UNDO_TODO} from './constants'
import {deleteTodo,addTodo,doneTodo, undoDoneTodo} from './utilities'
var intialState = [];


const todoReducer = (state=intialState, action) => {
    var {type, payload} = action
    switch (type) {
        case ADD_TODO:
            return addTodo(state, payload.todo)  
        case DELETE_TODO:
            return deleteTodo(state, payload.todoId)
      
         case DONE_TODO:
            return doneTodo(state, payload.todoId)
            
        case UNDO_TODO:
            return undoDoneTodo(state, payload.todoId)
       
          default:
            return state;
    }
    
}


export default todoReducer
