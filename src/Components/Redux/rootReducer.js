import React from 'react'
import todoReducer from '../Redux/TodosActionAndRed/todoReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todos : todoReducer
})


export default rootReducer
