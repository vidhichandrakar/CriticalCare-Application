import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
import PhonneNumberLogin from "./RightLoginSteps/PhoneNumberLogin";
import RightSignup from "../SignupComponent/RightSignup"
import EmailLoginOption from "./RightLoginSteps/EmailLoginOption";

 const RightComponent =({})=>{
  return(
    <Box className="rightBox">
      <Box className="rightTopBox">
       <img src={Logo} className="rightLogo"/>
      </Box>
      <FirstLoginOption/>
      {/* <PhonneNumberLogin/> */}
      {/* <RightSignup /> */}
      {/* <EmailLoginOption /> */}
    </Box>
  )
}
export default RightComponent;