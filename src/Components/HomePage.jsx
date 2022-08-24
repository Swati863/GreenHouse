import { Button } from '@chakra-ui/react'
import React from 'react'
import style from "../CSS/home.module.css"

const HomePage = () => {
  return (
    <div className={style.main_div}>
    {/* left div */}
  <div className={style.left_div}>
  <div> <img src="https://www.greenhouse.io/assets/svg/logo.svg" /> </div>
  <div>  Products & solutions </div>
  <div> Resources </div>
  <div> About Us </div>
  <div> Community </div>
  </div>

  {/* right div */}
  <div className={style.right_div}>
    <div>
        <Button  variant='outline' borderRadius={50} padding={5} borderColor={"white"} >Sign in</Button>
    </div>

    <div>
        <Button colorScheme='blue' borderRadius={50} padding={6}>Request a Demo</Button>
    </div>

    <div>
        {/* <SearchIcon /> */}
       
    </div>

  </div>
</div>
  )
}

export default HomePage