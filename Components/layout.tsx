import React from 'react';
import styles from '../src/pages/home.module.css';
import Sidebar from './Sidebar/Sidebar';
import SidebarMobile from './Sidebar/SidebarMobile';
import Header from './headers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={`d-flex w-100 ${styles.dashboard}`}>
        <div className={`d-none d-sm-block ${styles.SideBar}`}>
          <Sidebar />
        </div>
        <div className={`d-block d-sm-none ${styles.SideBar}`}>
          <SidebarMobile />
        </div>
        <div
          className={`px-2 px-sm-3 d-flex flex-column flex-grow-1 ${styles.content}`}
        >
          <Header />
          <div className="my-2">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
