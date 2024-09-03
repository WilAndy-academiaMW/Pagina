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
        <Link className="nav1" to='/'><img src={Perfil} alt="" /></Link>
    
        <div className="nav3">
            <div className="redes">
                <a className='link' href='https://www.tiktok.com/@elhombre_dios.99'><FaTiktok style={{ color:'red'}} className="icon" /></a>
                <a className='link2' href='https://www.tiktok.com/@elhombre_dios.99'><FaInstagram style={{ color: 'red' }} className="icon" /></a>
            </div>
        </div>


        </div>
       
    </nav >


    </div>
  )
}
