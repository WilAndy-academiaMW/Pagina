import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Perfil from '../../img/Nav/perfil.png'

import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
export const Nav = () => {
  return (
    <div>
<nav className='Nav'>
        <div id="navegacion">
        <div className="nav1"><a class='link' ><img src={Perfil} alt="" /></a></div>
    
        <div className="nav3">
            <div className="redes">
                <Link className='link'><FaTiktok style={{ color:'red'}} className="icon" /></Link>
                <Link className='link2' to='/explorador'><FaInstagram style={{ color: 'red' }} className="icon" /></Link>
            </div>
        </div>


        </div>
       
    </nav >


    </div>
  )
}
