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
  const [loginValue,setLoginValue]=useState("");
  const [cameFrom,setCameFrom] = useState("")
  const handleLoginOption =(type,value,path="")=>{
     console.log("valeu",value,type,path)
    setLoginOption(type);
    setLoginValue(value);
    setCameFrom(path);

  }
 
  return(
    <Box className="rightBox">
      <Box className="rightTopBox" >
      <a href="/"> <img src={Logo} className="rightLogo" /></a>
      </Box>
      {loginOption==="PhoneNumber" ? <PhonneNumberLogin handleLoginOption={handleLoginOption}/>
      :loginOption==="getOtpPhone" || loginOption==="emailLoginOtp"?
      <PhoneNoVerification displayValue={loginValue} handleLoginOption={handleLoginOption} cameFrom={cameFrom}/>:
      loginOption==="continueOtp"?
      <RightSignup handleLoginOption={handleLoginOption}/>
      :loginOption==="emailLogin"?
      <EmailLoginOption handleLoginOption={handleLoginOption}/>
      :loginOption==="loggIn"?<FirstLoginOption handleLoginOption={handleLoginOption} loginOption={loginOption}/>:<FirstLoginOption handleLoginOption={handleLoginOption}/>}
    </Box>
  )
}
export default RightComponent;