import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Container
} from '@chakra-ui/react'
import style from "../CSS/product.module.css"
import HomePage from '../Components/HomePage'

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    <div>
      
      {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup> */}
      <Button colorScheme='white' color={"grey"} fontWeight={400} onClick={onOpen} >
      Products & solutions
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth='1px'> */}
 
         <HomePage />
          {/* </DrawerHeader> */}
          <DrawerBody>
            
            <div className={style.main_div}>
            <div className={style.first_div}>

                {/* first div */}
              <Container>
                <Text fontSize='13px' color='#4cb398' lineHeight={10}>Products</Text>
                
                <Text fontSize='28px' color='white' lineHeight="10" _hover={{textDecoration:"underline"}} >  Recruiting</Text>
                <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>  Onboarding </Text>
               
              </Container>

              {/* second div */}
              <Container >
              <Text fontSize='13px' color='#4cb398' lineHeight={10} >Segments </Text>
                
              <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>   Enterprise </Text>
              <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}>   Small to midsize</Text>
                
              </Container>
            </div>


           {/* third div */}
            <div className={style.first_div}>
            <Container>
            <Text fontSize='13px' color='#4cb398' lineHeight={10}>Solutions</Text>
                
            <Text fontSize='28px' color='white' lineHeight={10} _hover={{textDecoration:"underline"}}> Integrations  </Text>
            <Text fontSize='28px' color='white'lineHeight={10} _hover={{textDecoration:"underline"}}>   Structured hiring </Text>
            <Text fontSize='28px' color='white'lineHeight={10} _hover={{textDecoration:"underline"}}>   Talent sourcing </Text>
            <Text fontSize='28px' color='white'lineHeight={10} _hover={{textDecoration:"underline"}}>  Candidate experience </Text>
            <Text fontSize='28px' color='white'lineHeight={10} _hover={{textDecoration:"underline"}}>  Diversity, equity & inclusion </Text>
            <Text fontSize='28px' color='white'lineHeight={10} _hover={{textDecoration:"underline"}}>  More solutions</Text>
            </Container>
            </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default Products