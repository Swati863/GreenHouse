import React from 'react'
import { Stack,Box, Button ,Text ,Image, SimpleGrid} from '@chakra-ui/react'
import Footer from '../Components/Footer'


const Greenhouse = () => {
  return (
    
    <div style={{padding:"0px 40px 0px 100px",position:"absolute",top:"150px"}}>

      {/* first-pic */}
     <Stack direction='row'>
      <Box w="50%" padding="50px" >
       <Text  fontSize='15px' align={"left"} color="#008561" fontFamily={"Untitled Sans"} >Introducing Sourcing Automation</Text>
       {/* <Text fontSize='70px' align={"center"} color="#15372c" fontWeight="400" padding="20px"> An efficient, personalized way to engage with talent</Text> */}
       <p style={{fontSize:'70px' ,textAlign:"left", color:"#15372c",fontWeight:"400", padding:"20px" ,lineHeight:"74px",fontFamily:"Untitled Serif" }} > An efficient, personalized way to engage with talent</p>
       <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"} padding="12px"> Sourcing Automation helps you find, reach and engage top talent quickly and effectively. Easily capture your prospects' contact information, personalize and scale your outreach and automate communication – all with Greenhouse.</Text>
      
       <Button  iconSpacing="2rem" colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >See how it works</Button>
      </Box>
      
      <Box w='50%'>
        <Image width="870px" height="760px" src="https://sharp.services.greenhouse.io/production/Greenhouse-homepage-sourcing-automation-product-image.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=7754fb1603c84e31364b61f5f19ee99fb18b12d2ec5fe3c3ede07d566b8a438c"  alt="first_image"  />
      </Box>
     </Stack>
     



     {/* second-pic */}
     <Stack direction='row'>
     <Box w='50%'>
        <Image width="870px" height="760px" src="https://sharp.services.greenhouse.io/production/Example-courses-from-Learn-Greenhouse-3.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=4b38236433fd0ec2ec499990c68c8d389bada59b72deee4aa999aa0feb207445"  alt="first_image"  />
      </Box>

      
      <Box  w='50%' padding="80px" >
        
       <Text  fontSize='46px' align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"300"} marginTop="130px"  >Learning Greenhouse is easier than ever</Text>
       <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"} padding="12px"> Train your team on Greenhouse and explore recruiting best practices with on-demand videos and courses. This resource library also highlights core workflow paths for recruiters, coordinators, hiring managers and interviewers.</Text>
      
       <Button  iconSpacing="2rem" colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >Start Learning</Button>
      </Box>
     </Stack> 

      {/* third-pic */}
      <Stack direction='row'>
     <Box w='50%'>
        <Image width="870px" height="760px" src="https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-feedback-results.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=69579a5baea45f2ed14696fba5208bf946a9006269c549d87a70a7a6cdfe0a59"  alt="first_image"  />
      </Box>

      
      <Box  w='50%' padding="80px" >
        
       <Text  fontSize='46px' align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"300"} marginTop="130px"  >Set new hires up for success with Greenhouse Onboarding</Text>
       <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"} padding="12px"> Train your team on Greenhouse and explore recruiting best practices with on-demand videos and courses. This resource library also highlights core workflow paths for recruiters, coordinators, hiring managers and interviewers.</Text>
      
       <Button  colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >About onboarding</Button>
      </Box>
     </Stack> 


     {/* fourth-pic */}

     <Stack direction='row'>
     <Box  w='50%' padding="80px" >
        
        <Text  fontSize='46px' align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"300"} marginTop="130px"  >Is your hiring strategy ready for what’s next?</Text>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"} padding="12px"> Learn more about Greenhouse Hiring Maturity and find out if your company is moving up the curve.</Text>
       
        <Button  iconSpacing="2rem" colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >Find Out</Button>
       </Box>
      
      <Box w='50%'>
        <Image width="760px" height="500px" src="https://sharp.services.greenhouse.io/production/A-man-smiling-in-a-group-of-coworkers-around-a-table.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a10dbb7e30cce9f6d5e2fa24078571559045d74d31386c76bce863990ceb7c90"  alt="first_image"  />
      </Box>
     </Stack>

     {/* fifth-pic */}

     <Stack direction='row'>
       {/* 1st-stack-start */}

     <Box  w='50%' padding="80px" borderRight={"solid"} borderColor="#15372c">
        
        <Text  fontSize='70px'  align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"400"} marginTop="120px"  >You’re in good company</Text>
        
        <Button   colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >Share Your thoughts on G2</Button>
       </Box>
       

      {/* 2nd-stack-start */}
      <SimpleGrid w='50%' columns={2} spacing={20} padding={40} margin={20}>
         {/* first-logo */}
         <Box >
          <Image width="250px" height="50px" src="https://sharp.services.greenhouse.io/production/Squarespace-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=aec1ac31518b64560204c23345a186514e6e4ec7e2ed1348eeecd8a311215402" alt="square-space logo" />
         </Box>

        {/* 2nd-logo */}
         <Box >
          <Image width="250px" height="50px" src="https://sharp.services.greenhouse.io/production/JD-Power-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=73530e84025775b01ab82aefc5c264b382a1b58177bb3b39541f220ee8e57243" alt="square-space logo" />
         </Box>

         {/* 3rd-logo */}
         <Box>
          <Image width="250px" height="50px" src="https://sharp.services.greenhouse.io/production/wayfair-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=e414f9de33013b4e4cc2f07849e062caf94d813b6dcf294a71d81fd419119b9b" alt="square-space logo" />
         </Box>

          {/* 4th-logo */}
         <Box>
          <Image width="250px" height="50px" src="https://sharp.services.greenhouse.io/production/GitLab-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=90343bafabaceb8b41f92ee7fcee1a5e4a07d3846b842833dd0d7ae71d394812" alt="square-space logo" />
         </Box>

         {/* 5th-logo */}
         <Box>
          <Image width="250px" height="50px" src="https://sharp.services.greenhouse.io/production/trivago-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=9f43ed82ddfdf755d3a4a46fc41037853d419e5631245c17f7cd2c56b2711e5a" alt="square-space logo" />
         </Box>

         {/* 6th-logo */}
         <Box>
          <Image width="200px" height="50px" src="https://sharp.services.greenhouse.io/production/Doordash-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=3cc82bd0c82a9ad8818ae611902ec4d8f35452d915ed6c2de8dec56a66cf11e2" alt="square-space logo" />
         </Box>
         </SimpleGrid>
         
 {/* 2nd-stack-end */}

      </Stack>
     {/* 1st-stack-end */}
     

{/* 
     img src="data:image/jpeg;base64,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" */}


       {/* last-pic */}
    <Stack direction='row'>
    <Box  w='50%' padding="80px" >
        
        <Text  fontSize='46px' align={"left"} color="#15372c" fontFamily={"Untitled Serif"} fontWeight={"300"} marginTop="130px"  >Share your Greenhouse experience</Text>
        <Text fontSize='19px' align={"left"} color="#15372c" fontFamily={"Untitled Sans"} fontWeight={"400"} padding="12px"> Has Greenhouse helped transform your hiring practices? Let fellow business leaders and talent pros know! Because when every company is good at hiring, every person's potential can be unlocked at work.</Text>
       
        <Button  iconSpacing="2rem" colorScheme='green' borderRadius={50} fontFamily={"Untitled Sans"} fontSize={'18px'} padding="25px" >Add Your Review</Button>
       </Box>
      
      <Box w='50%'>
        <Image width="870px" height="760px" src="https://sharp.services.greenhouse.io/production/Photo-of-brunette-woman-in-a-gray-vest-2.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=e9d7003d6a3dd294708213002ecf8fec644dcf0db4aabef51fb388eea936a485"  alt="first_image"  />
      </Box>
   </Stack>

   <div>
    <Footer />
   </div>
    </div>
  )
}

export default Greenhouse