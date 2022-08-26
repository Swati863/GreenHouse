import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Community from '../Pages/Community'
import DemoPage from '../Pages/DemoPage'
import Greenhouse from '../Pages/Greenhouse'
import Products from '../Pages/Products'
import Resources from '../Pages/Resources'
import Footer from './Footer'
import Navbar from './Navbar'

const AllRoutes = () => {

  return (
    <div>
    
    {/* <Navbar /> */}

    <Routes>
        <Route path="/" element={<Greenhouse /> }></Route>
        <Route path="/products" element={<Products /> }></Route>
        <Route path="/resources" element={<Resources /> }></Route>
        <Route path="/aboutus" element={<AboutUs /> }></Route>
        <Route path="/community" element={<Community /> }></Route>
        <Route path="/demoPage" element ={<DemoPage /> } ></Route>
 
    </Routes>
   
 

    </div>
   
  )
}

export default AllRoutes