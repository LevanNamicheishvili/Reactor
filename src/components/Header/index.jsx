import react from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
      <header>
        <li>
        <img src={logo} alt="logo.png" />
        <button className='logInButt'>შესვლა</button>
        </li>
      </header>
    );
    };
    

    export default Header;