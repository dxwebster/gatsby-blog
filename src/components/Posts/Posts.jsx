import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./config/PreviewCompatibleImage";
import { PostContainerList } from "./styles";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map(({ node }) => (
    
    <Link key={node.fields.slug} to={node.fields.slug} className="post">
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

      <div className="title-box">
        <strong>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
        </strong>
        
        <p>{node.frontmatter.description}</p>
      </div>
    </Link>
  ));

  return <PostContainerList>{posts}</PostContainerList>;
};
