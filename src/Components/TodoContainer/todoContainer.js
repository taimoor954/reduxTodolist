import React from 'react'
import Todo from '../TodoContainer/Todo/todo'
import {connect} from 'react-redux'

const todoContainer = (props) => {
    // console.log(props.todos)    
    return (
        <div>
            {props.todos.map((todo)=> {return <Todo key={todo.id} todo={todo}/>})}
        </div>
    )
}   

var mapState = (state) => {
return {
    todos :  state.todos 
}
}
export default connect(mapState)(todoContainer)
