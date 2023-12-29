import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import LeftComponent from "./LeftComponents";
import RightComponent from "./RightComponent";
import "./../CSS/Login.css";
import PhoneNoVerification from "./RightLoginSteps/PhoneNoVerification";


export const HomeComponent =({})=>{
  return(
    <Box className="MainBox">
      <Box className="loginBox">
        <LeftComponent/>
        <RightComponent/>
       {/* <PhoneNoVerification/> */}
      </Box>
    </Box>
  )
}