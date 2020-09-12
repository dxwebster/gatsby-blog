import React from 'react';
import { Link } from "gatsby"

import { HeaderContainer } from "./styles";

import { SocialIcon } from 'react-social-icons';



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
            <SocialIcon url="https://linkedin.com/adrianalimashika" style={{ height: 25, width: 25 }} bgColor="#ff5a01"/>
            <SocialIcon url="https://instagram.com/driixie" style={{ height: 25, width: 25 }} bgColor="#ff5a01" />
            <SocialIcon url="https://github.com/dxwebster" style={{ height: 25, width: 25 }} bgColor="#ff5a01"/>
          </div>
        </div>

    </HeaderContainer>
  );
}

export default Header;

