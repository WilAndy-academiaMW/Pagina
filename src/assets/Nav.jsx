import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Nav = ({Logo,Stilo,Stilo2}) => {
  return (
    <nav className='Nav'>
        <div id="navegacion">
        <div className="nav1"><Link className='link' to='/'><img src={Logo} alt="" /></Link></div>
      {/*   <div className="nav2">
            <div className="menu">
                <Link to="/" className='menu-text'> Inicio</Link>
                <Link to="/Elexplorador" className='menu-text'>El Explorador</Link>
                <Link className='menu-text'to="/ElSaber" > El Saber </Link>
            </div>
        </div>*/}
        <div className="nav3">
            <div className="redes">
                <Link className='link'><FaTiktok style={{ color: Stilo}} className="icon" /></Link>
                <Link className='link2'><FaInstagram style={{ color: Stilo2 }} className="icon" /></Link>
            </div>
        </div>


        </div>
       
    </nav >
    
)}
