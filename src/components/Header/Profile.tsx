import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rodrigo Torres</Text>
        <Text color="gray.300" fontSize="small">rodrigo.gviva@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Rodrigo Torres" src="https://github.com/Rodrigo947.png"></Avatar>
    </Flex>
  )
}