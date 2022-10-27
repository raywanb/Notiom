import { Button, Wrap, WrapItem, Text, Center, Box} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React from 'react';
import {useState} from 'react';



const Editor = (props) =>{


    const [message, setMessage] = useState(props.mess);

    const handleChange = (event) =>{
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        console.log(props.ind)
        props.addToDoc(message, props.ind)
        console.log(message);
        props.toEdit(0);
    }


    return (
        <Box bg="cream" h="100vh">
            <Wrap justify='center'>
                <form onSubmit={handleSubmit} className="editor">
                    <textarea name="text" className="textbox" value={message} onChange={handleChange}></textarea>
                    <input type="submit" value="Save"/>
                </form>
            </Wrap>
        </Box>  
    );
}

export default Editor;