import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import './Header.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <div className="header-container">
          <div className="nav">
            <Link to="/"><h1 className="header-title">Home</h1></Link>
            <Link to="/"><h1 className="header-title">Sobre mim</h1></Link>
            <Link to="/"><h1 className="header-title">Contato</h1></Link>
          </div>
          
          <div className="social">
            <Link to="/"><h1 className="header-title">Github</h1></Link>
            <Link to="/"><h1 className="header-title">Linkedin</h1></Link>
            <Link to="/"><h1 className="header-title">Instagram</h1></Link>
          </div>
        </div>
      </header>
    )}
  />

)