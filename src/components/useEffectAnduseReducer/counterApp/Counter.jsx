import React, { useEffect, useReducer } from 'react'
const counterReducer = (state,action) => {
    switch(action.type)
    {
        case 'inc':
            return {...state, count : state.count + 1}
        case 'dec':
            return {...state, count : state.count - 1}    
        case 'keyOnChange':
            return {...state, key: action.payload}   
        default:
            throw new Error();     
    }
}
const ACTIONS = {
    INC : 'inc',
    DEC : 'dec',
    KEY_ONCHANGE : 'keyOnChange'
}
const Counter = () => {
    
    useEffect(()=>{
        console.log("I'm useEffect");
    },[]);

    const [state,dispatch] = useReducer(counterReducer,{count:0,key:''});
    const handleDec = () =>{
        dispatch({type : ACTIONS.DEC})
    }
    const handleInc = () =>{
        dispatch({type : ACTIONS.INC})
    }
    const handleOnChange = (e)=>{
        dispatch({type : ACTIONS.KEY_ONCHANGE, payload:e.target.value})
    }
    return (
        <>
        <input type='text' value={state.key} onChange={handleOnChange}/>
        <p>{`Your key is ${state.key}`}</p>
        <div>
            <button onClick={handleDec}>-</button>&nbsp;
            <span>{state.count}</span>&nbsp;
            <button onClick={handleInc}>+</button>
        </div>
        </>
    )
}

export default Counter