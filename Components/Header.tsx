import React from 'react';
import Logo from '../public/logo.png';
import Image from 'next/image';
import { FaSignOutAlt } from 'react-icons/fa';
import { DataStorage } from '../dataContext';

const Header = () => {
  const { userLogout, data } = React.useContext(DataStorage);
  
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div>
        <Image src={Logo} alt="Logo" width={150} />
      </div>
      <nav className="d-flex justify-content-between align-items-center gap-3">
        <span>Bem vindo <strong>{data?.displayName}</strong></span>
        <button
          onClick={userLogout}
          className="btn btn-primary d-flex justify-content-between align-items-center gap-2"
        >
          <FaSignOutAlt size={20} color="text-primary" />
          <span>Sair</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
