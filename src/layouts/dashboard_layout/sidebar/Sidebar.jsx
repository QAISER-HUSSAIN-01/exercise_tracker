import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import { IconButton } from '@mui/material';
import useAuth from '../../../utils/auth';
import { useRouter } from 'next/router';
function Sidebar({ hide, handleSidebarLinks }) {
  const router = useRouter();
  const {logout} = useAuth()
  const handelSignout = ()=>{
   const removed = logout();
   console.log(removed);
   if(removed){
    router.push('/signin')
   }
  }
  return (
    <div className={styles.sidebar}>
      <ul className={styles.unorderedList}>
        {items.map((item, index) => (
          <Link
            href={item.to}
            key={index}
            className={styles.link}
            onClick={handleSidebarLinks}
          >
            <li>
              <span style={{color:'#ffbf00'}}> {item.icon} </span> <span style={{ display: hide }}>{item.name} </span>
            </li>
          </Link>
        ))}
      </ul>
      <IconButton onClick={handelSignout}>
        <MdLogout />
      </IconButton>
    </div>
  )
}

export default Sidebar;