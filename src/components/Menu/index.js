import React from 'react';
import ButtonLink from '../ButtonLink'
import Logo from '../../assets/img/logo.png';

import './style.css'

function Menu() {
   return (
      <nav className="menu">
         <a href="/">
            <img src={Logo} alt="DeyvFlix" className="logo" />
         </a>

         <ButtonLink href="/" className="buttonLink">
            Novo vídeo
         </ButtonLink>

      </nav>
   );
}

export default Menu;