import { Button, Wrap, WrapItem, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Wrap ml='4vw' justify='center'>
            <WrapItem>
            <Button variant='Doc'>
                <img src='./add.svg'/>
            </Button>
            </WrapItem>
            {Array.from(Array(11).keys()).map((obj, i) => {
                return <WrapItem><Button variant='Reg'><Text variant='L4'>Lorem ipsum dolor sit amet, consectetur</Text></Button></WrapItem>
            })}
        </Wrap>
    )
}

export default Footer;