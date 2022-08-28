import { Box, Button, Checkbox, Input, ListItem, Select, Stack, TagLabel, Text, UnorderedList } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../CSS/demo.module.css"

const initialState = {
  email:"",
  f_name:"",
  l_name:"",
  comp_name:"",
  size:"",
  onboarding:false,
  sourcing:false,

}

const DemoPage = () => {
  const [user, setUser] = useState([])
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleAdd = (e) => {

    const{name:key,value, type,checked} = e.target
    if(type === "checkbox"){
      setForm({...form,[key]:checked})
    }
    else{
      setForm({...form,[key]:value})
    }  
  }

  const redirect =()=>{
     navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser([...user,form])
    console.log(user)
    // setForm(initialState)
    alert(`Details Submitted:-  Email- ${form.email} 
    First-Name -  ${form.f_name} 
    Last-Name-   ${form.l_name} 
    Comapany-Name - ${form.comp_name} 
    Company-Size -  ${form.size} 
    Onboarding required -  ${form.onboarding} 
    Sourcing required -  ${form.sourcing}  `)
     alert("Thankyou For Submitting Your details, a Greenhouse team member will reach out within 24 business hours.")
     redirect();
  }

  


  return (
    <div className={style.main_div}>

          {/* div-left */}
       <div className={style.left_div}> 
        <Box   margin={"60px"}>
          <Text fontSize='70px' align={"left"} lineHeight={"70px"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"400"}> Get a demo of Greenhouse</Text>
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
          

        <FormControl >
  <FormLabel > * Work email address</FormLabel>
  <Input borderColor={"grey"} marginBottom={"30px"} type='email'  value={form.email} onChange={handleAdd} name="email"  />

  <FormLabel > * First name</FormLabel>
  <Input borderColor={"grey"} marginBottom={"30px"} type='text' value={form.f_name} onChange={handleAdd} name="f_name" />

  <FormLabel > * Last name</FormLabel>
  <Input borderColor={"grey"} marginBottom={"30px"} type='text' value={form.l_name} onChange={handleAdd} name="l_name"  />

  <FormLabel > * Company name</FormLabel>
  <Input borderColor={"grey"} marginBottom={"30px"} type='text' value={form.comp_name} onChange={handleAdd} name="comp_name"/>

  <FormLabel>* Company size</FormLabel>
  <Select borderColor={"grey"} marginBottom={"30px"} placeholder='Select ...' value={form.size} onChange={handleAdd} name="size" >
    
    <option>1-50</option>
    <option>51-100</option>
    <option>101-250</option>
    <option>250-500</option>
    <option>501-1000</option>
    
  </Select>

  <FormHelperText>In addition to recruiting, are you interested in these other solutions?</FormHelperText>

  <Stack spacing={4} >
  <Checkbox colorScheme='green' borderColor={"grey"} borderRadius={"50px"} type="checkbox" checked={form.onboarding} onChange={handleAdd} name="onboarding">
    Onboarding
  </Checkbox>
  <Checkbox colorScheme='green' borderColor={"grey"} type="checkbox" checked={form.sourcing} onChange={handleAdd} name="sourcing" >
    Sourcing Automation
  </Checkbox>
</Stack>

<Button colorScheme="green" borderRadius={"50"} padding={"6"} marginTop={"40px"} onClick={handleSubmit}>Request a Demo</Button>
</FormControl>
       
       </div> {/* div-right */}


    </div>
  )
}

export default DemoPage