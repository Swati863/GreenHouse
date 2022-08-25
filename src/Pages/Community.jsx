import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Container,
  Text,
  Image
} from '@chakra-ui/react'
import HomePage from '../Components/HomePage'
import style from "../CSS/product.module.css"

const Community = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    
    <div>
      
    <Button colorScheme='white' color={"grey"} fontWeight={400} onClick={onOpen}>
      Community
    </Button>
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
      <HomePage />
        <DrawerBody>
        <div className={style.m_div}>
          <div className={style.f_div} >
              
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Events </Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Open </Text>
          <Text fontSize='26px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Talent Makers</Text>
          <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Newsletter</Text>
        
          </div>
          <div className={style.para_div}>
          <div className={style.image_div}>
            <Image width="350px" height="250px" borderRadius={10}  src="https://sharp.services.greenhouse.io/production/Photo-of-a-woman-wearing-a-headdress-n.png?auto=format&fit=max&lossless=true&q=90&w=426&s=efbf30b0032415c27114661976fb1308ac70708cc11d1f5ceca5c4f67344fbef" alt="woman icon" />
          </div>

         
            <div className={style.parain_div}>
            <Text fontSize='13px' color='#4cb398'  >Open Conference 2022</Text>
            <Text fontSize='25px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>Hire for what’s next</Text>
            <Text fontSize='14px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>Join us in person or virtually at the new Jacob Javits Center for a two-day conference designed to elevate your hiring in real time, from May 24–25, 2022.</Text>
            <br></br>
            <Button _hover={{color:'#4cb398'}} colorScheme='#15372c' border={"solid"} borderRadius={50}  fontSize={'16px'} >Learn more</Button>
            </div>
          </div>

          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>


  </div>
  )
}

export default Community