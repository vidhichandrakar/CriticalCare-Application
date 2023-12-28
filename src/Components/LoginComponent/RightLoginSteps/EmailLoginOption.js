import React from "react";
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


function EmailLoginOption() {
  return (
    <div>
      <RightTextBox />
      <Box className = "BoxWidth">
        
    <Typography className="loginText">Please Select the method of login/signup</Typography>
    <BoxHeight />
      <TextField fullWidth label="Email id" id="fullWidth" className="BoxShadow"/>
      <BoxHeight />
      <Button fullWidth variant="contained" disabled className="otpButton BoxShadow">
        Get OTP
      </Button>
    </Box>
    </div>
  );
}

export default EmailLoginOption;
