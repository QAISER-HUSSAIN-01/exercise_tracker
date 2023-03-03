import React from 'react';
import styles from './Dashboard.module.css';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import useLayout from '../../hooks/useLayout';

function DashboardLayout({ children }) {
  const [handleSidebar,handleSidebarLinks,left,hide] = useLayout();
  return (
    <div className={styles.layout}>
      <div className={styles.navbarContainer}>
        <Navbar handleSidebar={handleSidebar} />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sidebarContainer} style={{ left: left }} >
          <Sidebar hide={hide} handleSidebarLinks={handleSidebarLinks} />
        </div>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;