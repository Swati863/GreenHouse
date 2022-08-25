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

const Resources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    <div>
      
      <Button colorScheme='white' color={"grey"} fontWeight={400} onClick={onOpen}>
        Resources
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <HomePage />
          <DrawerBody>
          <div className={style.m_div}>
            <div className={style.f_div} >
                
            <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Blog  </Text>
            <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Guidance </Text>
            <Text fontSize='26px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>Customer-stories </Text>
            <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Hiring glossary </Text>
          
            </div>
            <div className={style.para_div}>
            <div className={style.image_div}>
              <Image width="350px" height="250px" borderRadius={10}  src="https://sharp.services.greenhouse.io/production/Talent-Makers-book-cover-n.png?auto=format&fit=max&lossless=true&q=90&w=426&s=39652d73de16c7719a700214bce70d443705da7a6050c920b1c5a9cdbad2d60a" alt="book icon" />
            </div>

           
              <div className={style.parain_div}>
              <Text fontSize='13px' color='#4cb398'  >Now available</Text>
              <Text fontSize='25px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>Talent Makers – The definitive book on great hiring</Text>
              <Text fontSize='14px'color='white' fontFamily={"Untitled Sans"} fontWeight={"400"} paddingRight={10}>We’ve packed all our insights, strategies and tips into a book that will help you make hiring your superpower.</Text>
              <br></br>
              <Button _hover={{color:'#4cb398'}} colorScheme='#15372c' border={"solid"} borderRadius={50}  fontSize={'16px'} >See the reviews</Button>
              </div>
            </div>

            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


    </div>
  )
}

export default Resources