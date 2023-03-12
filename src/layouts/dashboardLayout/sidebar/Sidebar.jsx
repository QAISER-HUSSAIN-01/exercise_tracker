import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import { IconButton, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useRouter } from 'next/router';


function Sidebar({ hide, handleSidebarLinks }) {
  const router = useRouter();
  const {logout} = useAuth()
  const handelSignout = ()=>{
    console.log(logout());
   if(logout()){
    router.push(`/signin`)
   }
  }
  return (
    <div className={styles.sidebar}>
      <Typography component={'ul'} className={styles.unorderedList}>
        {items.map((item, index) => (
          <Link
            href={item.to}
            key={index}
            className={styles.link}
            onClick={handleSidebarLinks}
          >
            <Typography component={'li'}>
              <Typography> {item.icon} </Typography> <Typography style={{ display: hide }}>{item.name} </Typography>
            </Typography>
          </Link>
        ))}
      </Typography>
      <IconButton onClick={handelSignout}>
        <MdLogout />
      </IconButton>
    </div>
  )
}

export default Sidebar;