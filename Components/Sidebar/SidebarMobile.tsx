import React from 'react'
import Link from 'next/link'
import {FaBook, FaCalculator, FaHome, FaReadme, FaUser} from 'react-icons/fa'
import styles from '../../src/pages/home.module.css'

const SidebarMobile = () => {
  return (
    <div className={`bg-primary px-2 ${styles.SideBar}`}>
      <nav className='d-flex flex-column gap-4 py-5 justify-content-center'>
        <Link href='#' className='d-flex gap-2 justify-content-center  text-decoration-none text-white'>
          <FaReadme size={18} /> 
         </Link>
         <Link href='#' className='d-flex gap-2 justify-content-center  text-decoration-none text-white'>
          <FaUser size={18}/> 

         </Link>
         <Link href='#' className='d-flex gap-2 justify-content-center  text-decoration-none text-white'>
          <FaHome size={18}/> 
 
         </Link>
         <Link href='#' className='d-flex gap-2 justify-content-center  text-decoration-none text-white'>
          <FaBook size={18}/> 
  
         </Link>
         <Link href='#' className='d-flex gap-2 justify-content-center  text-decoration-none text-white'>
          <FaCalculator size={18}/> 
         </Link>
      </nav>
    </div>
  )
}

export default SidebarMobile
