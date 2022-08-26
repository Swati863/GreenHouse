import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Text,
  Image
} from '@chakra-ui/react'
import HomePage from '../Components/HomePage'
import style from "../CSS/product.module.css"

const AboutUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    <div>
      
    <Button colorScheme='white' color={"grey"} fontWeight={400} onClick={onOpen}>
      About Us
    </Button>
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
      <HomePage />
        <DrawerBody>
        <div className={style.m_div}>
          <div className={style.f_div} >
              
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Mission  </Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Belonging </Text>
          <Text fontSize='26px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Company </Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Careers </Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Press & awards </Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Contact </Text>
        
          </div>
          <div className={style.para_div}>
          <div className={style.image_div}>
            <Image width="400px" height="250px" borderRadius={10}  src="https://sharp.services.greenhouse.io/production/Greenhouse-Pride-tshirt-n.jpg?auto=format&fit=max&lossless=true&q=90&w=426&s=de44e24806b388901684135be6acb800917d827f4b3424eade2f1300c44d2177" alt="man icon" />
          </div>

         
            <div className={style.parain_div}>
            <Text fontSize='13px' color='#4cb398'  >Greenhouse celebrates Pride</Text>
            <Text fontSize='25px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>Buy a shirt, help an LGBTQ+ teen</Text>
            <Text fontSize='14px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>We’re shining a spotlight on the LGBTQ+ community with our new Pride t-shirt. 100% of the proceeds are going to support The Trevor Project and the Ali Forney Center.</Text>
            <br></br>
            <Button _hover={{color:'#4cb398'}} colorScheme='#15372c' border={"solid"} borderRadius={50}  fontSize={'16px'} >Get Your Pride Shirt</Button>
            </div>
          </div>

          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>


  </div>
  )
}

export default AboutUs