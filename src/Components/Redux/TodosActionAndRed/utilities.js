export var addTodo = (State, todoObject) => {
    return [...State, todoObject]  
//state mein jitnay may todos hen usko spread karen and us he may payload 
            //todo add kara di
        //state mein jitnay may todos hen usko spread karen and us he may payload
}

export var deleteTodo = (State, todoID) => {
return State.filter((todo) => {
    return todo.id !== todoID
})
}

export var doneTodo = (State, todoID) => {
    return State.filter((todo) =>  {
        if(todo.id == todoID)
        {
             todo.isCompleted = true
             return todo
     }

        return todo    
    }
)}

export var undoDoneTodo = (State, todoID) => {
    return State.filter((todo) =>  {
        if(todo.id == todoID)
        {
               todo.isCompleted = false
               return todo                
        } 
        return todo
    }) 
  
}
