import React from "react";
import HomeImage from "../../../Images/Header_wallpaper.png";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "react-router-dom";

function AllCourses() {
  return (
    <main className="main-container">
      <div className="main-title homeImage">
        <img src={HomeImage} />
      </div>
      <section>
        <h1 className="Allcoursestext">All Courses</h1>
        <div className="main-cards">
        <div className="card">
            <img src={HomeImage} className="cardImage" />
            <h1 className="margintoph1">IOQM 2024</h1>
            <div >
              <p className="margintopp">
                <Person4OutlinedIcon  className="iconStudent"/>
                Targeted batch for MS Students
              </p>
            </div>
            <div className="cardDate">
              <p>
                <CalendarMonthIcon className="iconDate"/>Starts on <span>15 DEC 2023</span>
              </p>
              <p>
                <FiberManualRecordIcon className="iconDate"/> Ends on <span>15 DEC 2023</span>
              </p>
            </div>

            <h2 className="marginttoph2">$15000</h2>
            <div className="CardButton">
              <button className="btn bluecolor">EXPLORE </button>
              <Link to="/OrderSummary"><button className="btn">BUY NOW</button></Link>
            </div>
          </div>
          </div>
      </section>
    </main>
  );
}

export default AllCourses;
