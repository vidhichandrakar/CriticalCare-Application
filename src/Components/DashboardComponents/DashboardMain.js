import { useState } from 'react'
import "../CSS/DashBoard.css"
import Header from './AllCOmponents/Header'
import Sidebar from './AllCOmponents/SiderBar'
import Home from './AllCOmponents/Home'

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
    </div>
  )
}

export default DashboardMain