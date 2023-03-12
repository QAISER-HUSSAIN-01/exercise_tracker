import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import Link from 'next/link';
import { Typography } from '@mui/material';



function Sidebar({ hide, handleSidebarLinks }) {
  
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
    </div>
  )
}

export default Sidebar;