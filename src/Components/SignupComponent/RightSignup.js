import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '80%',
      }}
    >
      <TextField fullWidth label="Full Name" id="fullWidth" />
      <RedBar />
      <TextField fullWidth label="Email Id" id="fullWidth" />
      <RedBar />
      <TextField fullWidth label="Phone Number" id="fullWidth" />
      <RedBar />
      <TextField fullWidth label="Hospital Name" id="fullWidth" />
      <RedBar />
      <TextField fullWidth label="Qualification" id="fullWidth" />
      <RedBar />
      <TextField fullWidth label="Current Affillation" id="fullWidth" />
    </Box>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     '& .MuiTextField-root': { width: '25ch' },
    //   }}
    // >

    //   {/* <RedBar /> */}
    //   <TextField label={'Full Name'} id="margin-none" />
    //   {/* <RedBar /> */}
    //   <TextField label={'Email Id'} id="margin-dense" margin="dense" />
    //   {/* <RedBar /> */}
    //   <TextField label={'Phone Number'} id="margin-normal" margin="normal" />
    //   {/* <RedBar /> */}
    //   <TextField label={'Hospital Name'} id="margin-normal" margin="normal" />
    //   {/* <RedBar /> */}
    //   <TextField label={'Qualification'} id="margin-normal" margin="normal" />
    //   {/* <RedBar /> */}
    //   <TextField label={'Current Affillation'} id="margin-normal" margin="normal" />
    //   {/* <RedBar /> */}
    // </Box>
  );
}