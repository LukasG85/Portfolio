import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Project from "../components/global/Project";
import HeadingText from "../components/headingText";

const WORKS = graphql`
  {
    items: allContentfulPortfolio {
      edges {
        node {
          title
          id
          img {
            fluid(maxWidth: 960, maxHeight: 630) {
              ...GatsbyContentfulFluid
            }
          }
          url
        }
      }
    }
  }
`;

export default class work extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Work" />
        <main className="work">
          <HeadingText title="My" subtitle="projects" />
          <div className="projects">
            <StaticQuery
              query={WORKS}
              render={data => {
                const products = data.items.edges;
                // Show all projects
                return products.map(item => {
                  return <Project key={item.node.id} product={item.node} />;
                });
              }}
            />
          </div>
        </main>
      </Layout>
    );
  }
}
