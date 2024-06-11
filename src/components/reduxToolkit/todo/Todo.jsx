import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../../store/reducers/todo'
import '../reduxToolkit.css'

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todos.data);
    const isLoading = useSelector(state=>state.todos.isLoading);
    const isError = useSelector(state=>state.todos.isError);
    const getTodosHandler = ()=>{
        dispatch(getTodos());
    }
  return (
    <div>
        <button className='welcome-btn' onClick={getTodosHandler}>GetToDos</button>
        {
            isLoading && <p>Getting data ...</p>
        }
        {
            !isLoading && todos.length > 0 && (
                todos.map(todo=>(
                    <p>{todo.title}</p>
                ))
            )  
        }
        {
            !isLoading && todos.length == 0 
            && <p>Click GetToDos button to get todos.</p>
        }
    </div>
  )
}

export default Todo