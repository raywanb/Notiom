import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
      body: '\'DM Sans\', sans-serif'
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: '#2F80ED',
      cream: '#F5F5F5',
      grey: '#A3A3A3',
      offBlack: '#545454',
      offWhite: '#F8F8F8',
    },
    components: {
      HStack: {
        variants: {
          'HS1': {
            spacing:'50px'
          },
        },
        defaultProps: {
          colorScheme: 'teal',
        } 
      },
      Text: {
        variants: {
          'L1': {
            mt: "10vh",
            color:'offBlack',
            fontSize:'8vh',
            fontWeight:700,
          },
          'L2': {
            mt: "4vh",
            color:'offBlack',
            fontSize:'5.2vh',
            fontWeight:700,
          },
          'L3': {
            ml: '1.5vw',
            color:'offBlack',
            fontSize:'4vh',
            fontWeight:700,
          },
          'L4': {
            color:'offBlack',
            fontSize:'2vh',
            fontWeight:700,
            noOfLines:5,
            mt:'-10%'
          },
        },
        defaultProps: {
          as:'b'
        },
      },
      CloseButton: {
        variants: {
          'Delete': {
            size:'sm',
            color:'offWhite',
            marginLeft:'7.75vw',
            mt:'4.8vh',
            position: 'absolute'
          }
        }
      },
      Button: {
        variants: {
          'Create': {
            bg: '#2F80ED',
            color: "white",
            mr: '3vw',
            w: "8.5vw",
            mt: '3vh',
          },
          'Doc': {
            bg: '#2F80ED',
            color: "white",
            mt: '5vh',
            w: "10vw",
            h: '15vh',
            mr: '5.5vw',
            borderRadius:'10px',
          },
          'Reg': {
            bg: 'offWhite',
            color: "white",
            mt: '5vh',
            w: "10vw",
            h: '15vh',
            mr: '5.5vw',
            borderWidth:'2px',
            borderRadius:'10px',
            borderColor: 'grey',
            whiteSpace: "normal",
            wordWrap: "break-word",
          },
        },
        defaultProps: {
          colorScheme: 'teal',
        }
      }
    }
  
  });

export default theme;