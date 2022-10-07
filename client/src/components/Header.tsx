import { Box, Text, Center } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box bg='cream' w='100vw' h='42vh'>
        <Center>
          <Text variant="L1">Create. Explore.</Text>
        </Center>
        <Center>
          <Text variant="L2">The document editing software you've been waiting for</Text>
        </Center>
        </Box>
    )
}

export default Header;