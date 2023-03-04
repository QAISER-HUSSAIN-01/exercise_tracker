import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import Link from 'next/link';

function Sidebar({ hide, handleSidebarLinks }) {
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
    </div>
  )
}

export default Sidebar