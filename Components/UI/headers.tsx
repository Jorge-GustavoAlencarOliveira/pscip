import React from 'react';
import Image from 'next/image';
import { FaSignOutAlt } from 'react-icons/fa';
import { DataStorage } from '../../dataContext';
import Link from 'next/link';
import Logo from '../../public/logo.png'
const Header = () => {
  const { userSignOut, user } = React.useContext(DataStorage);

  return (
    <header className="d-flex justify-content-between align-items-center border-bottom border-bottom-secondary-subtle pb-2">
      <div>
        <Link href="/dashboard">
          <Image src={Logo} alt="Logo" width={150} />
        </Link>
      </div>
      <nav className="d-flex justify-content-between align-items-center gap-3">
        <span className="d-none d-sm-block">
          Bem vindo <strong>{user?.name}</strong>
        </span>
        <button
          onClick={userSignOut}
          className="d-none d-sm-block btn btn-secondary d-flex justify-content-between align-items-center gap-2"
        >
          Sair
        </button>
        <button
          onClick={userSignOut}
          className="d-block d-sm-none btn btn-primary d-flex justify-content-between align-items-center gap-2"
        >
          <FaSignOutAlt size={20} color="text-primary" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
