import {
    createTheme,
    } from '@material-ui/core/styles';
    
    const Theme = createTheme({
      palette: {
        primary: {
          main: '#0C022F',
  
        },
        secondary: {
          main: '#D8E9A8',
        },
        tertiary : "black"
      },
      typography: {
        fontFamily: ['Overlock','sans-serif']
      },
      
    });
    
    export default Theme;