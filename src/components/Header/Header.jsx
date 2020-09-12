import React from 'react';
import { Link } from "gatsby"

import { HeaderContainer } from "./styles";


function Header(props) {
  return (
    <HeaderContainer>
        <div className="nav-container">
          <div className="nav">
            <Link to="/"><h1 className="header-title">Home</h1></Link>
            <Link to="/about"><h1 className="header-title">Sobre mim</h1></Link>
            <Link to="/contact"><h1 className="header-title">Contato</h1></Link>
          </div>
          
          <div className="social">
            <Link to="/"><h1 className="header-title">Github</h1></Link>
            <Link to="/"><h1 className="header-title">Linkedin</h1></Link>
            <Link to="/"><h1 className="header-title">Instagram</h1></Link>
          </div>
        </div>

    </HeaderContainer>
  );
}

export default Header;

