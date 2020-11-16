import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo, doneTodo, undoDoneTodo} from '../../Redux/TodosActionAndRed/todoAction'
import '.././Todo/todo.css'
// import {connect} from 'react-redux'

const todo = (props) => {
    // console.log(props.todos)
    // console.log(props.todo)
    return (
        props.todo.isCompleted ? 
        <div className=' todo flex'><h3 className='heading'>{props.todo.name}</h3><button className='buttonDelete' onClick={(e)=>props.undoDoneTodo(props.todo.id)}>Undo</button></div> 
        :
        <div className='todo flex'><h3 className='heading'> {props.todo.name}</h3> <button className="buttonDone" onClick={(e)=>props.doneTodo(props.todo.id)}>Done</button>
         <button className='buttonDelete' onClick={(e)=>props.deleteTodo(props.todo.id)}>Delete</button>
         </div> 
        
    )
}

var actions = {
    deleteTodo,
    doneTodo, 
    undoDoneTodo
}

var mapState= (store) => {
return {
    todos: store.todos

}
}

export default connect(mapState , actions)(todo)
