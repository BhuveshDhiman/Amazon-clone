import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        ></img>
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        <SearchIcon className='header__searchIcon'></SearchIcon>
      </div>
    </nav>
  );
}

export default Header;
