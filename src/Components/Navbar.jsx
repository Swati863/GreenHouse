import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import  {Button, Search2Icon } from '@chakra-ui/react'
import style from "../CSS/navbar.module.css"
import Products from '../Pages/Products'
import Resources from '../Pages/Resources'
import AboutUs from '../Pages/AboutUs'
import Community from '../Pages/Community'


const Navbar = () => {
  const navigate = useNavigate()


   
  return (
    <div className={style.main_div}>
        {/* left div */}
      <div className={style.left_div}>
      <div> <Link to="/"> <img src="https://www.greenhouse.io/assets/svg/logo.svg" /></Link> </div>
      <div>  <Products /> </div>
      <div> <Resources /> </div>
      <div><AboutUs /> </div>
      <div> <Community />   </div>
      {/* <div> <Link to="/Resources">Resources</Link> </div> */}
      {/* <div> <Link to="/AboutUs">About Us</Link> </div>
      <div> <Link to="/Community">Community</Link> </div> */}
      </div>

      {/* right div */}
      <div className={style.right_div}>
        <div>
            <Button  variant='outline' borderRadius={50} padding={5} borderColor={"black"}  >Sign in</Button>
        </div>

        <div>
            <Button colorScheme='blue' borderRadius={50} padding={6} onClick={()=>{ navigate("/DemoPage")}  }>Request a Demo</Button>
        </div>

        <div>
            {/* <Search2Icon /> */}
           
        </div>

      </div>
      
    </div>
  )
}

export default Navbar