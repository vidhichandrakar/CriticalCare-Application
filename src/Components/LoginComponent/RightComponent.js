import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
import RightTextBox from "./RightLoginSteps/RightTextBox";
 const RightComponent =({})=>{
  return(
    <Box className="rightBox">
      <Box className="rightTopBox">
       <img src={Logo} className="rightLogo"/>
        <RightTextBox/>
      </Box>
      <FirstLoginOption/>
    </Box>
  )
}
export default RightComponent;