import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Project from "../components/pages/Project";

const WORKS = graphql`
  {
    items: allContentfulPortfolio {
      edges {
        node {
          title
          id
          img {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyContentfulFluid_tracedSVG
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
        <main id="work">
          <h1 className="lg-heading">
            Moje <span className="text-secondary">projekty</span>
          </h1>
          <div className="projects">
            <StaticQuery
              query={WORKS}
              render={data => {
                const products = data.items.edges;
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
