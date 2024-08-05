import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Phone = () => {
  return (
    <Box w={"85%"} margin={"0 auto"} >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Image src="../../public/phone.png"  display={{md:"block", base:"none" }} />
        </Box>
    </Box>
  )
}

export default Phone
