import React from 'react'
import { NavLink } from 'react-router-dom'
import './reactRouterDom.css'

const Navbar = () => {
  return (
    <div className='nav-link'>
        <NavLink className={({isActive})=>(isActive ? 'active':'')} to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/product'}>Products</NavLink>
    </div>
  )
}

export default Navbar