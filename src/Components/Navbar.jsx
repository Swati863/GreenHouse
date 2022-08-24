import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import  {Button, Search2Icon } from '@chakra-ui/react'
import style from "../CSS/navbar.module.css"
import Products from '../Pages/Products'


const Navbar = () => {
   
  return (
    <div className={style.main_div}>
        {/* left div */}
      <div className={style.left_div}>
      <div> <Link to="/"> <img src="https://www.greenhouse.io/assets/svg/logo.svg" /></Link> </div>
      {/* <div> <Link to="/Products">Products & solutions</Link> </div> */}
      <div> 
        <Products />
        {/* <Link to="/Products">Products & solutions</Link>  */}
        </div>
      <div> <Link to="/Resources">Resources</Link> </div>
      <div> <Link to="/AboutUs">About Us</Link> </div>
      <div> <Link to="/Community">Community</Link> </div>
      </div>

      {/* right div */}
      <div className={style.right_div}>
        <div>
            <Button  variant='outline' borderRadius={50} padding={5} borderColor={"black"}  >Sign in</Button>
        </div>

        <div>
            <Button colorScheme='blue' borderRadius={50} padding={6}>Request a Demo</Button>
        </div>

        <div>
            {/* <Search2Icon /> */}
           
        </div>

      </div>
    </div>
  )
}

export default Navbar