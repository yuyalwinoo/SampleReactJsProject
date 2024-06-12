import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Main from '../../layout/Main'
import Product from '../../pages/Product'

const ReactRouterDom = () => {
  const router = createBrowserRouter([
    {path : '', element : <Main/> , children : [
      { path:'/', element: <Home/>},
      { path:'/about', element: <About/>},
      { path:'/product', element: <Product/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default ReactRouterDom