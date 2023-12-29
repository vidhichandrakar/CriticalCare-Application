import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../Images/Logo.png"
import FirstLoginOption from "./RightLoginSteps/FirstLoginOption";
import PhonneNumberLogin from "./RightLoginSteps/PhoneNumberLogin";
import RightSignup from "../SignupComponent/RightSignup"
import EmailLoginOption from "./RightLoginSteps/EmailLoginOption";
import PhoneNoVerification from "./RightLoginSteps/PhoneNoVerification";

 const RightComponent =({})=>{
  const [loginOption,setLoginOption] = useState("");
  const [loginValue,setLoginValue]=useState("")
  const handleLoginOption =(type,value)=>{
    console.log("value",value,type)
    setLoginOption(type);
    setLoginValue(value)
  }
 
  return(
    <Box className="rightBox">
      <Box className="rightTopBox" >
      <a href="/"> <img src={Logo} className="rightLogo" /></a>
      </Box>
      {loginOption==="PhoneNumber" ? <PhonneNumberLogin handleLoginOption={handleLoginOption}/>
      :loginOption==="getOtpPhone" || loginOption==="emailLoginOtp"?
      <PhoneNoVerification displayValue={loginValue} handleLoginOption={handleLoginOption}/>:
      loginOption==="continueOtp"?
      <RightSignup handleLoginOption={handleLoginOption}/>
      :loginOption==="emailLogin"?
      <EmailLoginOption handleLoginOption={handleLoginOption}/>
      :<FirstLoginOption handleLoginOption={handleLoginOption}/>}
    </Box>
  )
}
export default RightComponent;