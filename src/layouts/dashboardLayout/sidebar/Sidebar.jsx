import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import Link from 'next/link';
import { Typography } from '@mui/material';
import {useRouter} from 'next/router'


function Sidebar({ hide, handleSidebarLinks }) {
  const router = useRouter();
  console.log(router.pathname);
  
  return (
    <div className={styles.sidebar}>
      <Typography component={'ul'} className={styles.unorderedList}>
        {items.map((item, index) => (
          <Link
            href={item.to}
            key={index}
            className={styles.link}
            style={{backgroundColor:'green'}}
            onClick={handleSidebarLinks}
          >
            <Typography component={'li'} sx={{backgroundColor: router.pathname === item.to ?  '#f4f4f4' :''}}>
              <Typography> {item.icon} </Typography> <Typography style={{ display: hide }}>{item.name} </Typography>
            </Typography>
          </Link>
        ))}
      </Typography>
    </div>
  )
}

export default Sidebar;