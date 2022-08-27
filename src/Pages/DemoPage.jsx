import { Box, Input, ListItem, Select, Stack, TagLabel, Text, UnorderedList } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import React from 'react'
import style from "../CSS/demo.module.css"

const DemoPage = () => {
  return (
    <div className={style.main_div}>

       {/* <Stack >
        <Stack padding="80px" border="solid">
        <Box w='50%' >
          <Text fontSize='70px' align={"left"} color="#15372c" border="solid" fontFamily={"Untitled Serif"} fontWeight={"400"}> Get a demo of Greenhouse</Text>
        </Box>
        <Box w='50%' padding="20px" margin={"140px"}>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"}> From recruiting candidates to onboarding new team members, Greenhouse gives your company everything you need to be great at hiring.</Text>
        </Box>

        <Box w='50%' padding="80px">
        <label> Book a session with us to:</label>
        <UnorderedList>
  <ListItem>Get an overview of the Greenhouse platform</ListItem>
  <ListItem>Discuss your goals with a product expert</ListItem>
  <ListItem>Receive pricing details based on your needs</ListItem>
  
</UnorderedList>
        </Box>

<Box>
  <Text>Once you complete the request form, a Greenhouse team member will reach out within 24 business hours.</Text>
</Box>
</Stack>
       </Stack> */}

          {/* div-left */}
       <div className={style.left_div}> 
        <Box   margin={"50px"}>
          <Text fontSize='70px' align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"400"}> Get a demo of Greenhouse</Text>
         </Box>
         <Box  margin={"50px"}>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"bold"}> From recruiting candidates to onboarding new team members, Greenhouse gives your company everything you need to be great at hiring.</Text>
        </Box>

        <Box  margin={"50px"}>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"bolder"}> Book a session with us to:</Text>
        </Box>

        <Box  margin={"80px"}>
        <UnorderedList >
  <ListItem>Get an overview of the Greenhouse platform</ListItem>
  <ListItem>Discuss your goals with a product expert</ListItem>
  <ListItem>Receive pricing details based on your needs</ListItem>
 
</UnorderedList>
        </Box>

        <Box  margin={"40px"}>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"bolder"}> Once you complete the request form, a Greenhouse team member will reach out within 24 business hours.</Text>
        </Box>


       </div>  {/* div-left */}

       <div className={style.right_div}> {/* div-right*/}
          

        <FormControl>
  <FormLabel > * Work email address</FormLabel>
  <Input borderColor={"grey"}  type='email' isRequired />

  <FormLabel > * First name</FormLabel>
  <Input borderColor={"grey"}  type='email' isRequired />

  <FormLabel > * Last name</FormLabel>
  <Input borderColor={"grey"}  type='email'  isRequired />

  <FormLabel > * Company name</FormLabel>
  <Input borderColor={"grey"}  type='email' />

  <FormLabel>* Company size</FormLabel>
  <Select placeholder='Select ...' isRequired>
    
    <option>1-50</option>
    <option>51-100</option>
    <option>101-250</option>
    <option>250-500</option>
    <option>501-1000</option>
    
  </Select>

  <FormLabel > * Work email address</FormLabel>
  <Input borderColor={"grey"}  type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
       
       </div> {/* div-right */}


    </div>
  )
}

export default DemoPage