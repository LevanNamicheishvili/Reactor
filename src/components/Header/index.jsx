import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import RegModal from '../RegModal/index';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header>
      <li>
        <img src={logo} alt="logo.png" />
        <button className='logInButt' onClick={handleOpenModal}>
          შესვლა
        </button>
        <RegModal
          isModalVisible={isModalOpen}
          setIsModalVisible={setIsModalOpen}
        />
      </li>
    </header>
  );
};

export default Header;
