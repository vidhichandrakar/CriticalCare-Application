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

export default function RightSignup() {
    const [number, setNumber] = useState();

const handleChange = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setNumber(value);
};
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "80%",
      }}
    >
      <Typography className="loginText Signup">Signup</Typography>
      <RedBar />
      <RedBar />
      <RedBar />
      <TextField fullWidth size="small" label="Full Name" id="fullWidth" />
      <RedBar />
      <TextField fullWidth size="small" label="Email Id" id="fullWidth" />
      <RedBar />
      <TextField
        fullWidth
        maxLength={10}
        size="small"
        label="Phone Number"
        id="fullWidth"
        value={number} 
        onChange={handleChange}
      />
      <RedBar />
      <TextField fullWidth size="small" label="Hospital Name" id="fullWidth" />
      <RedBar />
      <TextField fullWidth size="small" label="Qualification" id="fullWidth" />
      <RedBar />
      <TextField
        fullWidth
        size="small"
        label="Current Affillation"
        id="fullWidth"
      />
      <RedBar />
      <RedBar />
      <Button fullWidth variant="contained" disabled className="otpButton">
        Get OTP
      </Button>
    </Box>
  );
}
