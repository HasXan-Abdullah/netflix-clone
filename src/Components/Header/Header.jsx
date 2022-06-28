import React from 'react'
import './Header.css';
import Logo from '../../logoN.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineMenu} from 'react-icons/ai/'
const Header = () => {
  
  return (
 
 
  
  
      <div className="header">
        <Navbar bg="none"  expand="lg"  >
        <Container fluid>
          <Navbar.Brand ><img  className='imgLogo' src={Logo} alt="Logo"  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"   >
            <span className='menuIcon'><AiOutlineMenu/></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" >
            <Nav
             
              style={{ maxHeight: '500px',color:'white' }}
              navbarScroll
            >
              <Nav.Link  as={Link} to='/topviews' >TV Series</Nav.Link>
              <Nav.Link  as={Link} to='/topviews'>Movies</Nav.Link>
              <Nav.Link  as={Link} to='/topviews'>Recently Viewed</Nav.Link>
              <Nav.Link   as={Link} to='/topviews'>My List</Nav.Link>
              <Nav.Link   as={Link} to='/topviews'> <span className='svgSearch'><ImSearch/></span></Nav.Link>

            
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  


 
export default Header