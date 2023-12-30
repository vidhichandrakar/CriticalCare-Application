import React from 'react'
import { useState } from 'react'
import "../../CSS/DashBoard.css"
import Header from '../AllCOmponents/Header'
import Sidebar from '../AllCOmponents/SiderBar'
import {TermsData} from "../../JsonData/Terms&Cond/Terms&Cond";
import "./TermsAndCondition.css";

function TermsAndCondition() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='main-container'>
       <div className='termsAndConditionMain'>
      <div className="text">
        <h1>{TermsData.one.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.two.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.three.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.four.topic}</h1>
        <p >{TermsData.one.detail}</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default TermsAndCondition
