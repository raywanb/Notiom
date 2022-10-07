import { Button } from '@chakra-ui/button';
import React from 'react';
import { Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div className='box'>
      <div className='logo'>
        <img src={"./notiom.svg"}/>
        <Text variant='L3'>Notiom</Text>
      </div>
      <Button variant="Create">Create</Button>
    </div>
  );
}

export default Navbar;
