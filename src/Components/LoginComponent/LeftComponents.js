import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import dekstopImg from "../../Images/dekstopImg.jpg";
const LeftComponent =({})=>{
  return(
    <Fragment>
      <Box className="Leftcomponent">
     <img src={dekstopImg} className="leftLoginImage"/>
     </Box>
    </Fragment>
  )
}
export default LeftComponent;