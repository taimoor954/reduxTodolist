import React from 'react'
import '../Form/form.css'

import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import {addTodo} from '../Redux/TodosActionAndRed/todoAction'
class form extends React.Component{
state = {
    inputValue : ''
}

onSubmit = (e) => {
    e.preventDefault()
    var todoObj ={
    name : this.state.inputValue,
    isCompleted : false,
    id : uuidv4()
    }
this.props.addTodo(todoObj)

}

changeInput = (e) => {
var value = e.target.value
this.setState({
    inputValue: value
})
}

render = () => {
    return (
        <div className="form flex">
          <form onSubmit={(e) =>{this.onSubmit(e)}}>
         <input className="Input" type='text' value={this.state.value} onChange={(e)=>  this.changeInput(e)} ></input>
         <button className="Button" >Add</button>
        </form>
         </div>
 )
}

}
var actions = {
    addTodo
}

export default connect(null, actions)(form)
