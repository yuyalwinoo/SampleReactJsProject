import { useState } from "react"

const Register = ({registerInfo}) => {
    const [newData,SetNewData] = useState({
        name:'',
        email:'',
        address:''
    });

    const addNewData = (e) => {
        e.preventDefault();
        if(newData.name.trim() === '' || newData.email.trim() === '' || newData.address.trim() === '')
        {
            alert('Please enter a valid value!!!');
            return;
        }
        registerInfo(newData);
        
        SetNewData({
            name:'',
            email:'',
            address:''
        });

    }
    return (
        <div>
            <form onSubmit={addNewData}>
                <div className="inputDiv">
                    <label>Name:</label>
                    <input type="text" 
                            value={newData.name} 
                            onChange={(e)=>SetNewData({...newData,name:e.target.value})}/>
                </div>
                <div className="inputDiv">
                    <label>Email:</label>
                    <input type="text" 
                            value={newData.email} 
                            onChange={(e)=>SetNewData({...newData,email:e.target.value})}/>
                </div>
                <div className="inputDiv">
                    <label>Address:</label>
                    <input type="text" 
                            value={newData.address}
                            onChange={(e)=>SetNewData({...newData,address:e.target.value})}/>
                </div>
                <div className="inputDiv">
                    <button type="submit" className="SubmitBtn">Register</button>
                </div>      
            </form>
        </div>
    )
}

export default Register