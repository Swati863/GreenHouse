import React from 'react'
import styles from "../CSS/footer.module.css"
import {
  
    Button,
    Text,
    Container,
    Input,
    Select
  } from '@chakra-ui/react'

const Footer = () => {

  return (
  <div className={styles.footermain_div}>
    {/* first-segment */}
     <div className={styles.first_div}>

      {/* first div */}
      <Container  mt={"10px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Products</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >  Recruiting</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}>  Onboarding </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}>  Pricing </Text>
               
      </Container >

       {/* second div */}
       <Container  mt={"20px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Segments</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} > Enterprise</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Small to midsize </Text>
              
               
      </Container>

       {/* third div */}
       <Container   mt={"20px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Solutions</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Integrations</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Structured hiring </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Talent sourcing</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Candidate experience</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Diversity, equity & inclusion</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> More solutions </Text>
               
      </Container>


        </div>  {/* first-segment */}

        <div>  {/* second-segment */}
          {/* fourth-div */}
       <Container  mt={"10px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Resources</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Blog</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Guidance </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Customer stories</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Hiring glossary</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Support</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Developer resources </Text>
               
      </Container>

          {/* fifth-div */}
          <Container  mt={"20px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Platform</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Ethical principles</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Services </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Mobile</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> APIs</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Security</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> GDPR </Text>
               
      </Container>
      </div>  {/* second-segment */}
       

          <div>  {/* third-segment */}

 {/* 7th-div */}
 <Container  mt={"10px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>About us</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Mission</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Belonging </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Company</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Careers</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Press & awards</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}>Contact </Text>
               
      </Container>

       {/* 8th-div */}
 <Container  mt={"20px"}>
                <Text fontSize='15px' color='#4cb398' lineHeight={"10"}>Community</Text>
                
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Events</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Open </Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}} >Talent Makers</Text>
                <Text fontSize='18px' color='white' lineHeight={"30px"} _hover={{textDecoration:"underline"}}> Newsletter</Text>
            
               
      </Container>

          </div>  {/* third-segment */}
       
        <div className={styles.fourth_seg}> {/* fourth-segment */}

       <div> <h2>Modern Recruiter newsletter</h2> </div>
       <div> <p>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</p> </div>

<div> <label style={{color:"white"}}> * Email address</label> 
<br></br>
 <input placeholder='' /></div>


<div>  <Button variant='outline' borderRadius={50} padding={5} borderColor={"white"} >Subscribe</Button> </div>
<br></br>


   
<div>
  <label>Choose Your language</label>
<Select placeholder='English US' width={200}>
  <option value='option1'>English US</option>
  <option value='option2'>English UK</option>
  <option value='option3'>Deutsch</option>
</Select>
</div>


        </div> {/* fourth-segment */}
        
    </div>
  )
}

export default Footer