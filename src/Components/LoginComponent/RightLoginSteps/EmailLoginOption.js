import React, { useState } from "react";
import RightTextBox from "./RightTextBox";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function BoxHeight() {
    return (
      <Box
        sx={{
          height: 15,
        }}
      />
    );
  }


function EmailLoginOption({handleLoginOption}) {
  const [emailValue,setEmailValue] =useState("");
  const handleEmail =(value)=>{
  setEmailValue(value)
  }
  return (
    <>
      <RightTextBox />
      <Box className = "BoxWidth">
        
    <Typography className="loginText">Please Select the method of login/signup</Typography>
    <BoxHeight />
      <TextField fullWidth label="Email id" id="fullWidth" className="BoxShadow" onChange={(event)=>handleEmail(event.target.value)}/>
      <BoxHeight />
      <Button fullWidth variant="contained" disabled={emailValue!=null && emailValue!=""?false:true} className="otpButton BoxShadow" onClick={()=>handleLoginOption("emailLoginOtp",emailValue)}>
        Get OTP
      </Button>
    </Box>
    </>
  );
}

export default EmailLoginOption;
