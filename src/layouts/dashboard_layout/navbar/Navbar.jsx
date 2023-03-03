import React from 'react';
import styles from './Navbar.module.css';
import { MdMenu } from 'react-icons/md';
import { IconButton, styled, Typography,Avatar } from '@mui/material';
import { useRouter } from 'next/router';

function Navbar({ handleSidebar }) {
  const router = useRouter();
   const gotoLandingPage = ()=>{router.push('/')}
  return (
    <div className={styles.navbar}>
      <Logo component={'div'}>
        <IconButton onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
        <Typography variant='h6' component={'div'} onClick={gotoLandingPage}>Fitness</Typography>
      </Logo>
      <IconButton>
        <Avatar sx={{width:'30px',height:'30px'}}/>
      </IconButton>
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

export default Navbar