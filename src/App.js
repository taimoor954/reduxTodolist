import React from 'react'
import './App.css'
import Header from './Components/Header/header'
import Form from './Components/Form/form'
import TodoContainer from './Components/TodoContainer/todoContainer'

var  App= () =>{
    return (
      <div className="App">
        <Header/>
        <Form />
        <TodoContainer/>
      </div>
    );
  }

export default App;
