import * as React from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

function RedBar() {
  return (
    <Box
      sx={{
        height: 10,
      }}
    />
  );
}

export default function RightSignup({handleLoginOption}) {
    const [formData,setFormData]=useState({Name:"",emailId:"",number:"",hospitalName:"",qualification:"",affillation:"",disabled:true})

const handleTextChange =(type,value)=>{
   let formDataValue = {...formData};
   if(type=="number"){
   value = value.replace(/\D/g, "");
   }
   formDataValue[type]=value;
   if(formDataValue.Name!="" && formDataValue.emailId!="" &&
    formDataValue.hospitalName!="" && formData.number!="" &&
     formDataValue.qualification!="" && formDataValue.affillation!=""){
    formDataValue.disabled=false;
   }
   else{
    formDataValue.disabled=true;
   }
  setFormData(formDataValue);

}
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "80%",
        textAlign:"center"
      }}
    >
      <Typography className="loginText Signup">Signup</Typography>
      <RedBar />
      <RedBar />
      <RedBar />
      <TextField fullWidth size="small" label="Full Name" id="fullWidth" className="BoxShadow" onChange={(event)=>handleTextChange("Name",event.target.value)}/>
      <RedBar />
      <TextField fullWidth size="small" label="Email Id" id="fullWidth" className="BoxShadow" onChange={(event)=>handleTextChange("emailId",event.target.value)}/>
      <RedBar />
      <TextField
        fullWidth
        inputProps = {{maxLength:10}}
        size="small"
        label="Phone Number"
        id="fullWidth"
        value={formData.number} 
        onChange={(event)=>handleTextChange("number",event.target.value)}
        className="BoxShadow"
      />
      <RedBar />
      <TextField fullWidth size="small" label="Hospital Name" id="fullWidth" className="BoxShadow"onChange={(event)=>handleTextChange("hospitalName",event.target.value)}/>
      <RedBar />
      <TextField fullWidth size="small" label="Qualification" id="fullWidth" className="BoxShadow" onChange={(event)=>handleTextChange("qualification",event.target.value)}/>
      <RedBar />
      <TextField
        fullWidth
        size="small"
        label="Current Affillation"
        id="fullWidth"
        className="BoxShadow"
        onChange={(event)=>handleTextChange("affillation",event.target.value)}
      />
      <RedBar />
      <RedBar />
      <Button fullWidth variant="contained" disabled={formData.disabled} className="otpButton" onClick={()=>handleLoginOption("getOtpPhone",formData.number)}>
        Get OTP
      </Button>
    </Box>
  );
}
