import { useRef } from "react"

const Register = ({registerInfo}) => {
   
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const addNewData = (e) => {
        e.preventDefault();
        if(nameRef.current.value.trim() === '' || emailRef.current.value.trim() === '' || addressRef.current.value.trim() === '')
        {
            alert('Please enter a valid value!!!');
            return;
        }
        const newData = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            address : addressRef.current.value
        }
        registerInfo(newData);
        
        nameRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";

    }
    return (
        <div>
            <form onSubmit={addNewData}>
                <div className="inputDiv">
                    <label>Name:</label>
                    <input type="text" 
                            ref={nameRef}/>
                </div>
                <div className="inputDiv">
                    <label>Email:</label>
                    <input type="text" 
                            ref={emailRef}/>
                </div>
                <div className="inputDiv">
                    <label>Address:</label>
                    <input type="text" 
                            ref={addressRef}/>
                </div>
                <div className="inputDiv">
                    <button type="submit" className="SubmitBtn">Register</button>
                </div>      
            </form>
        </div>
    )
}

export default Register