import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { MdLogout, MdMenu, MdPerson, MdSettings } from 'react-icons/md';
import { IconButton, styled, Typography, Avatar, Menu, MenuItem, Box } from '@mui/material';
import useRoutes from '../../../hooks/useRoutes';

function Navbar({ handleSidebar }) {
  const [user, setUser] = useState({ username: '', email: '' });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {gotoLandingPage,gotoProfile,gotoSetting,logout} = useRoutes(setAnchorEl)

  const handleClose = ()=>{setAnchorEl(null)}  
  const handleClick = (event) => {setAnchorEl(event.currentTarget)};

  useEffect(() => {
    const detail = JSON.parse(localStorage.getItem('user'));
    setUser({username: detail.username, email: detail.email});
  }, [])

  return (
    <div className={styles.navbar}>
      <Logo component={'div'}>
        <IconButton onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
        <Typography variant='h6' component={'div'} onClick={gotoLandingPage}>Fitness</Typography>
      </Logo>
      <Box>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <Avatar sx={{ width: '30px', height: '30px' }}>{user.username[0]}</Avatar>
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Box sx={{ padding: '10px 20px',display:'flex',gap:'20px',alignItems:'center' }}>
            <Avatar sx={{ width: '30px', height: '30px' }}>{user.username[0]}</Avatar>
            <Box>
              <Typography variant='body1'>{user.username}</Typography>
              <Typography variant='body2'>{user.email}</Typography>
            </Box>
          </Box>
          <StyledMenuItem onClick={gotoProfile}> <MdPerson /> Profile</StyledMenuItem>
          <StyledMenuItem onClick={gotoSetting}> <MdSettings /> Setting</StyledMenuItem>
          <StyledMenuItem onClick={logout}> <MdLogout /> Logout</StyledMenuItem>
        </Menu>
      </Box>
    </div>
  )
}

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  letterSpacing: '1px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))

export default Navbar