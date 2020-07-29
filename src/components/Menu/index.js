import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'
import Logo from '../../assets/img/logo.png';

import './style.css'

function Menu() {
   return (
      <nav className="menu">
         <Link to="/">
            <img src={Logo} alt="DeyvFlix" className="logo" />
         </Link>

         <Button as={Link} to="/cadastro/video" className="buttonLink">
            Novo vídeo
         </Button>

      </nav>
   );
}

export default Menu;