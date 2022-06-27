import React from 'react'
import './Header.scss';
import Logo from '../../logoN.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'

const Header = () => {

  return (
   <nav className='header'>

    <img src={Logo} alt="Logo"  />
    <div>
    
        <Link to='/tvshows'> TV Series</Link>
        <Link to='/tvshows'> Movies</Link>
        <Link to='/tvshows'> Recently Viewed</Link>
        <Link to='/tvshows'> My List</Link>
    </div>
    <ImSearch/>
   </nav>
  )
}

export default Header