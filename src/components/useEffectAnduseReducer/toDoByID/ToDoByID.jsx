import { useState } from "react"

const ToDoByID = () => {
    const [id,setId] = useState("");
    const [todo,setTodo] = useState(null);
    const [error,setError] = useState(false);
    const searchData = async(e)=>{
        e.preventDefault();
        if(id < 1)
        {
            setError(true);
            setId("");
            setTodo(null);
            return;
        }    
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => setTodo(json))
        setId("");
        setError(false);
    }
    
    return (
        <div>
            <form onSubmit={searchData}>
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <div>
                {
                    todo && (
                        <div>
                            <p>ID - {todo.id}</p>
                            <p>Title - {todo.title}</p>
                            <p>Status - {todo.completed ? 'Finished' : 'Not yet'}</p>
                        </div>
                    )
                }
                {
                    error && (
                        <p>Please enter valid ID (eg. 1,2,3 etc)</p>
                    )
                }
            </div>
        </div>
    )
}

export default ToDoByID