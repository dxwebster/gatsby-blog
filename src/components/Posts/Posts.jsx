import React from "react";
import { Link } from "gatsby";
import "./Posts.css";
import Img from "gatsby-image";
import PreviewCompatibleImage from "../PreviewCompatibleImage/PreviewCompatibleImage";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map(({ node }) => (
    <div key={node.fields.slug} className="post">
      <Img fluid={node.frontmatter.featuredimage} alt="Gatsby logo" />

      {node.frontmatter.featuredimage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: node.frontmatter.featuredimage,
              alt: `featured image thumbnail for node ${node.frontmatter.title}`,
            }}
          />
        </div>
      ) : null}

      <Link to={node.fields.slug} className="post-title">
        <h2>{node.frontmatter.title}</h2>
      </Link>

      <p className="post-date">{node.frontmatter.date}</p>

      <p>{node.frontmatter.description}</p>
    </div>
  ));
  return <div className="posts">{posts}</div>;
};
