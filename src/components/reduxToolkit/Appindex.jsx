import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Welcome from './Welcome'
import ReduxToolkitCounter from './ReduxToolkitCounter'


const Appindex = () => {
    const isLogin = useSelector(state=>state.auth.isLogin);
  return (
    <>
        <Navbar/>
        {
            !isLogin && <Welcome/>
        }
        {
            isLogin && <ReduxToolkitCounter/>
        }
    </>
  )
}

export default Appindex