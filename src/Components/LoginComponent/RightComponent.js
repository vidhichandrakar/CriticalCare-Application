import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
 const RightComponent =({})=>{
  return(
    <Box className="rightBox">
      <Box className="rightTopBox">
       <img src={Logo} className="rightLogo"/>
       <Typography className="rightTopHead">Welcome To</Typography>
       <Typography className="rightTopHead2">360 Critcial Care</Typography>
       <Typography className="rightTopHead3">World Class Preparation Just on tap away</Typography>
      </Box>
      <FirstLoginOption/>
    </Box>
  )
}
export default RightComponent;