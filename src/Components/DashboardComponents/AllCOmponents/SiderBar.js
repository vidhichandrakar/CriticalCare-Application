import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../../../Images/Logo.png"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';

function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "" } >
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={Logo} className="SideBarLogo"/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item BottomLine'>
                <Link to="/AllCourses">
                    <MenuBookIcon className='icon'/> All Courses
                </Link>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <ChatIcon className='icon'/> Chat
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <Link to="/AboutUs">
                    <InfoIcon className='icon'/> About Us
                </Link>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <Link to="/ContactUs">
                    <PhoneIcon  className='icon'/> Contact Us
                </Link>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <Link to="/PrivacyPolicy">
                    <VerifiedUserIcon className='icon'/> Privacy Policy
                </Link>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <Link to="/Terms&Conditions">
                    <DescriptionIcon className='icon'/> Terms & Conditions
                </Link>
            </li>
            <li className='sidebar-list-item red'>
            <Link to="/">
                    <LogoutIcon className='icon'/> Logout
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar
