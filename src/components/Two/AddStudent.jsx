import { useState } from "react";

const AddStudent = ({addNewStudent}) => {

    const [name,setName]=useState('');
    const [live,setLive]=useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name,
            live
        }
        addNewStudent(data);
        setName('');
        setLive('');
    }
    const nameOnChange = (e)=> setName(e.target.value);
    const liveOnChange = (e)=> setLive(e.target.value);
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={nameOnChange}/>
            <input type="text" placeholder="Address" value={live} onChange={liveOnChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddStudent