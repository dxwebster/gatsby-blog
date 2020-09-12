import React from "react";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import favicon from "../../../static/favicon.png";
import config from "../../../data/config";

import "minireset.css";
import {LayoutContainer} from "./styles.js";

export default ({ children }) => (
  <>
  <LayoutContainer>

    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
   
    <Header />
  
    <Hero title="" />

    <Container role="main">
      {children}
    </Container>

    <Footer />
   
  </LayoutContainer>
  </>
);

