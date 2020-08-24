import React from "react";
import { HeroContainer } from "./styles";

function Hero(props) {
    return <HeroContainer>Hello, {props.title}</HeroContainer>;
  }

  export default Hero;