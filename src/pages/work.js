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
                  return (
                    <Project key={item.node.id} product={item.node} />
                    // <div key={item.node.id} className="item">
                    //   <a
                    //     className="image"
                    //     href={item.node.url}
                    //     target="_blank"
                    //     rel="noopener noreferrer"
                    //   >
                    //     <p>{item.node.title}</p>
                    //     <Img fixed={item.node.img.fixed.src} alt="Project" />
                    //   </a>
                    /* <a href="#" className="btn-light">
                        <i className="fas fa-eye">Project</i>
                      </a> */
                    /* <a
                        href="https://github.com/LukasG85/WeatherApp"
                        className="btn-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-eye"> Github</i>
                      </a> */
                    // </div>
                  );
                  // <Product key={item.node.id} product={item.node} />
                });
              }}
            />
          </div>
          {/* <div className="projects">
            <div className="item">
              <a className="image" href="#">
                <p>Weather</p>
                <img src="./img/WeatherApp.jpg" alt="Project">
              </a>
               <a href="#" class="btn-light">
                      <i class="fas fa-eye">Project</i>
                  </a>
               <a
                href="https://github.com/LukasG85/WeatherApp"
                className="btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-eye"> Github</i>
              </a>
            </div>
          </div> */}
        </main>
      </Layout>
    );
  }
}
