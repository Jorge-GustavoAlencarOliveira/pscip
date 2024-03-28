import React from 'react';
import styles from '../../src/pages/home.module.css';
import Sidebar from '../Sidebar/Sidebar';
import SidebarMobile from '../Sidebar/SidebarMobile';
import Header from './headers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={`d-flex ${styles.dashboard}`}>
        <div className={`d-none d-sm-block ${styles.SideBar}`}>
          <Sidebar />
        </div>
        <div className={`d-block d-sm-none ${styles.SideBar}`}>
          <SidebarMobile />
        </div>
        <div
          style={{ minHeight: '100vh' }}
          className={`flex-grow-1 px-3 d-flex flex-column ${styles.content}`}
        >
          <Header />
          <div className="my-4 flex-grow-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
