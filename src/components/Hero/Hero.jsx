import React from "react";
import { HeroContainer } from "./styles";

import HeroLogo from '../../../static/img/logo.png';

function Hero(props) {
    return (
      <HeroContainer>
        <h1><img src={HeroLogo} alt="logo"/></h1>
        <h2 class="site-description">conteúdos sobre desenvolvimento web</h2>
      </HeroContainer>
    );
  }

  export default Hero;