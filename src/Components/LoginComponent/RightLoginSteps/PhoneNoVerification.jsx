import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import "./../CSS/Login.css";
import Button from "@mui/material/Button";

const PhoneNoVerification = ({displayValue,handleLoginOption,cameFrom}) => {
  const [otpValue,setOtp] = useState({ value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "",otp6:"", disable: true });
  const handleOtp = (type,value)=>{
   let prevOtp = {...otpValue};
    prevOtp[type]= value ;
    if(prevOtp.otp1!="" && prevOtp.otp2!="" && prevOtp.otp3!=""&& prevOtp.otp4!="" && prevOtp.otp5!="" &&prevOtp.otp6!=""){
      prevOtp.disable=false;
    }
    else{
      prevOtp.disable=true;
    }
    setOtp( prevOtp);
  }
  const handleLoginType=()=>{
    cameFrom!=="signUp"?handleLoginOption(cameFrom==="signUp"?"loggIn":"continueOtp"):window.location.href="AllCourses"
  }
  return (
    <>
      <Box className="rightBox">
        <Typography className="verificationHead"> Verification </Typography>
        <Typography className="verificationHead2">
          {" "}
          Enter the Code sent to your Phone{" "}
        </Typography>
        <Typography className="verificationHead3">
        {displayValue}
        </Typography>
      </Box>

      <div className="rightBottomBox mt13">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "5ch", height: "10ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp1",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp2",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp3",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp4",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp5",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
            onChange={(event)=>handleOtp("otp6",event.target.value)}
            inputProps={{
              maxLength:1,
              className:"boxOtpWidth"
            }}
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          disabled={otpValue.disable}
          className="continueButton"
          onClick={()=>handleLoginType()}
        >
          <p> Continue </p>
        </Button>
        <Button variant="contained" fullWidth className="resendOTPButton">
          <p> Resend OTP </p>
        </Button>
      </div>
    </>
  );
};

export default PhoneNoVerification;
