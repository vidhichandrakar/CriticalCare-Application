import { useState } from 'react'
import "../CSS/DashBoard.css"
import Header from './AllCOmponents/Header'
import Sidebar from './AllCOmponents/SiderBar'
import Home from './AllCOmponents/Home'
import ContactService from './Service/Contact.Service'
import AboutService from './Service/About.Service'
import PrivacyPolicyService from './Service/PrivacyPolicy.Service'
import TermsAndCondition from './Service/TermsAndCondition'

function DashboardMain() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      {/* <ContactService/> */}
      {/* <AboutService/> */}
      {/* <PrivacyPolicyService/> */}
      {/* <TermsAndCondition/> */}
    </div>
  )
}

export default DashboardMain