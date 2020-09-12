import styled from "styled-components";

import HeroBackground from '../../../static/img/hero.jpg';

export const HeroContainer = styled.div`
  grid-area: hero;

  width: 100%;
  padding: 5vw 3vw 6vw;
  margin: 0 auto;
  background: url(${HeroBackground}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;

  h1, h2 {
    text-align: center;
    color: #fff;
  }

  h2 {
    margin-top: 20px;
  }
  
`;