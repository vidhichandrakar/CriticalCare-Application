import { Button ,Box, Typography} from "@mui/material";
import React from "react";
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import RightTextBox from "./RightTextBox";

const theme = createTheme({
  palette: {
    ochre: {
      // main: '#000',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
  },
});
const FirstLoginOption =()=>{
  return(
    <>
    <RightTextBox/>
    <Box className="rightBottomBox">
    <Typography className="loginText">Please Select the method of login/signup</Typography>
    <ThemeProvider theme={theme}> 
    <Button variant="outlined" className="loginButton" color="ochre"><span>Continue with <b> Mobile Number</b></span>
    </Button>
    <Button variant="outlined" className="loginButton" color="ochre"><span>Continue with <b> Email ID</b></span>
    </Button>
    </ThemeProvider> 
   </Box>
   </>
  )
}
export default FirstLoginOption;