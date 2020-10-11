import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  // const [state, dispatch] = useStateValue();
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

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
      <div className='header__nav'>
        {/* 1st link */}
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
      </div>
      {/* 2nd link */}
      <Link to='/login' className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns </span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
      </Link>
      {/* 3rd link */}
      <Link to='/login' className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </Link>
      {/* 4th link */}
      <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
          {/* Basket icon */}
          <ShoppingBasketIcon></ShoppingBasketIcon>
          {/* Number of items in the basket */}
          <span className='header__optionLineTwo header__basketCount'>
            {cart.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
