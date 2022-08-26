import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const DemoPage = () => {
  return (
    <div>

       <Stack  >
        <Box w='50%' padding="80px"  margin={"70px"}>
          <Text> Get a demo of Greenhouse</Text>
        </Box>
        <Box w='50%' padding="80px" margin={"140px"}>
        <Text> From recruiting candidates to onboarding new team members, Greenhouse gives your company everything you need to be great at hiring.</Text>
        </Box>

        <Box w='50%' padding="80px">
        <Text> Book a session with us to:</Text>
        <ul></ul>
        </Box>


       </Stack>
    </div>
  )
}

export default DemoPage