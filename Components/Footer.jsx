import { Box,Stack,Avatar,VStack,Text } from '@chakra-ui/react'

import React from 'react'

const avatarSrc = "https://avatars.githubusercontent.com/u/110042139?v=4"
const Heart = "https://icons8.com/icon/upd5xh7hPe0R/pixel-heart"

const Footer = () => {
  return (
   <Box
   bgColor={"blackAlpha.900"}
   color={"white"}
   minH={"48"}
   px={"16"}
   py={["16","8"]}
   >
    
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
<VStack w={"full"} alignItems={["center" , "flex-start"]}>
    <Text
    fontSize={"sm"}
    letterSpacing={"widest"}
    textAlign={["center","left"]}
    >
        We are the best crypto trading app in Bharat. We provide our guidance
        at a very affordable price to  web3 enthusiasts.

    </Text>
</VStack>
<VStack>
    <Avatar boxSize={"100"} mt={["4","0"]} src={avatarSrc} />
    <Text textAlign={"center"} color={"yellow"}>Our Founder</Text>
    <Text>❤️</Text>
   
</VStack>
    </Stack>

     </Box>
  )
}

export default Footer
