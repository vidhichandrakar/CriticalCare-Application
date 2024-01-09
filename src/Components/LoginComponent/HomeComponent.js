import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import LeftComponent from "./LeftComponents";
import RightComponent from "./RightComponent";
import "./../CSS/Login.css";
import history from "../DashboardComponents/DashboardRouter/history";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export const HomeComponent =({})=>{

  return(
    <Box className="MainBox"  >
      <Box className="loginBox">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="colored" />
        <LeftComponent/>
        <RightComponent/>
      </Box>
    </Box>
  )
}