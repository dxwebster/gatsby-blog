import React from "react";
import Header from "../Header";
import Container from "../Container";
import Hero from "../Hero";
import Helmet from "react-helmet";
import favicon from "../../../static/favicon.png";
import config from "../../../data/config";

import "minireset.css";
import "./Layout.css";

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
   
    <Header />
  
    <Hero title="As melhores tecnologias em programação, direto ao ponto e do jeito certo." />

    <Container role="main">
      {children}
    </Container>
   
  </div>
);
