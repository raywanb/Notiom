import { Button } from '@chakra-ui/button';
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex direction='row' justify='space-between' bg='cream'>
        <Flex direction='row' align='center' ml='3%' mt='3vh'>
            <img src={"./notiom.svg"}/>
            <Text variant='L3'>Notiom</Text>
        </Flex>
        <Button variant="Create">Create</Button>
    </Flex>
  );
}

export default Navbar;
