import { Button, CloseButton, Wrap, WrapItem, Text, Image, Box } from "@chakra-ui/react";
import React from "react";

const Footer = (Props) => {

    const handleEdit = () => {
        Props.toEdit(1);
    }

    const getLastFive = (words) => {
        var n = words.toString().split(" ");
        var s = "";
        console.log(words)
        if (n.length < 5) {
            s = words;
            console.log(s)
        } else {
            for (var i = n.length - 5; i < n.length; i++) {
                s += n[i];
                s += " ";
            }
            s = s.slice(0, s.length - 1);
        }
        return s;
    }

    return (
        <Wrap ml='4vw' justify='center'>
            <WrapItem>
            <Button variant='Doc' onClick={handleEdit}>
                <Image width='100%' height='100%' src='./add.svg'/>
            </Button>
            </WrapItem>
            {Props.docs.map((obj, i) => {
                console.log(obj)
                return (<WrapItem>
                    
                        <Button onClick={() => {
                        Props.change(i);
                        Props.toEdit(1);
                        }} variant='Reg'>
                            <Text variant='L4'>{getLastFive(obj)}</Text>
                        </Button>
                        <CloseButton _hover={{ color: 'black' }} variant='Delete' onClick={() => {
                            console.log(i)
                            Props.del(i)
                        }}/>
                    
                </WrapItem>)
            })}
        </Wrap>
    )
}

export default Footer;