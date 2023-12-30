import React, { useState } from 'react'
import { BsJustify} from 'react-icons/bs'
 import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header({OpenSidebar}) {
  const [anchorElUser, setAnchorElUser] = useState(null);

    
const settings = ['Profile', 'Logout'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        
        <div className='header-right'>
        <Box sx={{ flexGrow: 0, color: 'black' }} className="ProfileName">
          <p>Hi, Sheikh </p>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "Black" }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem  onClick={handleCloseUserMenu} className='ProfileSetting'>
                  <Typography textAlign="center">Profile</Typography>
                  <Typography textAlign="center" className='red'>Logout</Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
        
        </div>
    </header>
  )
}

export default Header