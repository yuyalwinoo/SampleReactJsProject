import React, { useEffect, useState } from 'react'
import './allToDos.css'

const AllToDos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(_=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                        .then(response => response.json())
                        .then(json => setTodos(json));
    }
   
    return (
        <div>
            {
                todos.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Title</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        todos.map(todo=>(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? 'Finished' : 'Not yet'}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default AllToDos