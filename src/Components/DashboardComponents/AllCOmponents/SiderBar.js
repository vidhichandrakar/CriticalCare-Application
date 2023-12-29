import React from 'react'

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
                <a href="">
                    <MenuBookIcon className='icon'/> All Courses
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <ChatIcon className='icon'/> Chat
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <InfoIcon className='icon'/> About Us
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <PhoneIcon  className='icon'/> Contact Us
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <VerifiedUserIcon className='icon'/> Privacy Policy
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <DescriptionIcon className='icon'/> Terms & Conditions
                </a>
            </li>
            <li className='sidebar-list-item red'>
                <a href="">
                    <LogoutIcon className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar
