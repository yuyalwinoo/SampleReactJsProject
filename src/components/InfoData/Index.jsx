import React, { useState } from 'react'
import Register from './Register'
import List from './List'

const Index = () => {
    const [info,setInfo] = useState([]);
    const registerInfo = (data) => {
        
        setInfo(
            [...info,data]
        )
    }
    return (
        <div className='wrapper'>
            <Register registerInfo={registerInfo}/>
            <List info={info}/>
        </div>
    )
}

export default Index