import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
import PhonneNumberLogin from "./RightLoginSteps/PhoneNumberLogin";
 const RightComponent =({})=>{
  return(
    <Box className="rightBox">
      <Box className="rightTopBox">
       <img src={Logo} className="rightLogo"/>
        
      </Box>
      {/* <FirstLoginOption/> */}
      <PhonneNumberLogin/>
    </Box>
  )
}
export default RightComponent;