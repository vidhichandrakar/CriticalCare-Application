import { Button ,Box, Typography,TextField, InputAdornment} from "@mui/material";
import React from "react";
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import RightTextBox from "./RightTextBox";
import India from "../../../Images/India.png";

const PhonneNumberLogin =({})=>{
  return(
    <>
    <RightTextBox/>
    <Box className="rightBottomBox">
    <Typography className="loginText">Please Select the method of login/signup</Typography>
     
    <TextField
        id="input-with-icon-textfield"
       placeholder="Mobile Number"
       className="phoneTextField"
       sx={{color:"#000"}}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <p className="phoneTextFieldStartIcon"><Box className="indiaBox"><img src={India} className="indiaImg"/></Box> <p className="startText"> +91 - </p></p>
            </InputAdornment>
          )
        }}
      />
   
   </Box>
   </>
  
  )
}

export default PhonneNumberLogin;