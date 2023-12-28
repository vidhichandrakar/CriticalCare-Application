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

const PhonneNumberLogin = ({}) => {
  const [number, setNumber] = useState();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
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
          onChange={handleChange}
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
      </Box>
    </>
  );
};

export default PhonneNumberLogin;
