import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

const CategoryTemplate = (props) => {
  const { category } = props.pageContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
