import React from 'react'
import '../components/reduxToolkit/reduxToolkit.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const goToProducts =()=>{
       setTimeout(()=>{
            navigate('/product')
       },1000)

    }
  return (
    <div>
        Home<br></br>
        <button className='welcome-btn' onClick={goToProducts}>GoTo Products</button>
    </div>
  )
}

export default Home