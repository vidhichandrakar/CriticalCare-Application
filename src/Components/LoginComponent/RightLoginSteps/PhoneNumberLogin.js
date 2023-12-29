import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
// import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import RightTextBox from "./RightTextBox";
import India from "../../../Images/India.png";

const PhonneNumberLogin = ({handleLoginOption}) => {
  const [number, setNumber] = useState(null);

  const handleChange = (e) => {
    const value = e.replace(/\D/g, "");
    setNumber(value);
  };

  return (
    <>
      <RightTextBox />
      <Box className="rightBottomBox">
        <Typography className="loginText">
          Please enter your mobile number to login/signup
        </Typography>

        <TextField
          id="input-with-icon-textfield"
          placeholder="Mobile Number"
          className="phoneTextField"
          sx={{ color: "#000" }}
          variant="outlined"          
        inputProps = {{maxLength:10}}
          value={number} 
          onChange={(event)=>handleChange(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <p className="phoneTextFieldStartIcon">
                  <Box className="indiaBox">
                    <img src={India} className="indiaImg" />
                  </Box>{" "}
                  <p className="startText">
                    {" "}
                    +91 -{" "}
                  </p>
                </p>
              </InputAdornment>
            ),
          }}
        />
        <Button fullWidth variant="contained" onClick={()=>handleLoginOption("getOtpPhone",number)} disabled={number!=null && number!=""?false:true} className="otpButton BoxShadow" sx={{marginTop:"5%"}}>
        Get OTP
      </Button>
      </Box>
    </>
  );
};

export default PhonneNumberLogin;
