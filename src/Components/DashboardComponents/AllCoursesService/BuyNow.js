import React, {useState} from "react";
import HomeImage from "../../../Images/Header_wallpaper.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import Header from '../AllCOmponents/Header'
import Sidebar from '../AllCOmponents/SiderBar'

function BuyNow() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
    <main className="main-container">
      <div className="BuyNow-box">
        <h1 className="textcenter">Order Summary</h1>
        <div className="BuyNow-main-cards">
          <div className="BuyNow-item-card">
            <h1 className="textCart">Item in Cart</h1>
            <div className="InnerCardColumn">
              <img src={HomeImage} className="cardImageBuyNow" />
              <div className="textRight">
                <h3>IOQM 2024</h3>
                <h3 className="textMargintop">$15000</h3>
              </div>
            </div>
          </div>
          <div className="Cuppon-card">
            <h2 className="Cuppon-text">Apply Coupon Code</h2>
            <div className="Cuppon-button-box">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "70%",
                }}
              >
                <TextField fullWidth label="Write Coupon Code" id="fullWidth" />
              </Box>
              <Button variant="contained" disabled>
                APPLY
              </Button>
            </div>
            <div className="PaymentSummary">
              <h4>Payment Summary</h4>
              <div className="FLexRow">
                <p>Price (1 Items)</p>
                <p>$15000</p>
              </div>
              <div className="FLexRow">
                <p>Coupon Discount</p>
                <p className="green">-$0</p>
              </div>
            </div>
            <div className="FLexRow Total">
              <p>Total Amount </p>
              <p>$14000</p>
            </div>
            <Button variant="contained" className="Contained-Button">PORCEED TO BUY</Button>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default BuyNow;
