import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Community from '../Pages/Community'
import Greenhouse from '../Pages/Greenhouse'
import Products from '../Pages/Products'
import Resources from '../Pages/Resources'
import Navbar from './Navbar'

const AllRoutes = () => {

  return (
    <>
    
    <Routes>
        <Route path="/" element={<Greenhouse /> }></Route>
        <Route path="/products" element={<Products /> }></Route>
        <Route path="/resources" element={<Resources /> }></Route>
        <Route path="/aboutus" element={<AboutUs /> }></Route>
        <Route path="/community" element={<Community /> }></Route>

    </Routes>
    </>
  )
}

export default AllRoutes