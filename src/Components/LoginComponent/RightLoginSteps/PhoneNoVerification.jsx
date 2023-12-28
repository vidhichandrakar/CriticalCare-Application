import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import "./../CSS/Login.css";
import Button from "@mui/material/Button";

const PhoneNoVerification = ({}) => {
  return (
    <>
      <Box className="rightBox">
        <Typography className="verificationHead"> Verification </Typography>
        <Typography className="verificationHead2">
          {" "}
          Enter the Code sent to your Phone{" "}
        </Typography>
        <Typography className="verificationHead3">
          ...phone number will be displayed here...{" "}
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
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="OTPBox"
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          disabled
          className="continueButton"
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
