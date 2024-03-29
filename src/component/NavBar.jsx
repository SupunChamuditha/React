import { useEffect } from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = ()=> {
    const [activeLink,setActiveLink]= useState('Home');
    const [scrolled,seScrolled] = useState(false);

    useEffect(()=>{
        if(window.scrollY>50){
            seScrolled(true);
        }else{
            seScrolled(false);
        }
        window.addEventListener("scroll",onscroll);
        return()=> window.removeEventListener("scroll",onscroll);
    },[])

    const onUpdateActivateLink = (value)=>{
        setActiveLink(value);
    }

  return (
    <div>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className='navbar-brand'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? 'active navber-link':'navbar-link'}onClick={()=>onUpdateActivateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink==='skills'? 'active navber-link':'navbar-link'}onClick={()=>onUpdateActivateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink==='projects'? 'active navber-link':'navbar-link'}onClick={()=>onUpdateActivateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar