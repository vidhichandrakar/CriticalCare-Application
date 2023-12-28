import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
import PhoneNoVerification from "./RightLoginSteps/PhoneNoVerification";


 const RightComponent =({})=>{
  return(
    <Box className="rightBox">
      <Box className="rightTopBox">
       <img src={Logo} className="rightLogo"/>
        
      </Box>
      {/* <FirstLoginOption/> */}
      <PhoneNoVerification/>
    </Box>
  )
}
export default RightComponent;