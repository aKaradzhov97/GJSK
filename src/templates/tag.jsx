import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export const TagTemplate = (props) => {
  const { tag } = props.pageContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
