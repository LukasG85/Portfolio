import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <main className="about">
      <h1 className="lg-heading">
        O <span className="text-secondary">mnie</span>
      </h1>
      <div className="about-info">
        <Img fixed={data.file.childImageSharp.fixed} className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">Cześć</h3>
          <p>
            Nazywam się Łukasz Gancarz. Mam 33 lata. Pochodzę z&nbsp;małej
            miejscowości pod Tarnowem. W&nbsp;każdej wolnej chwili w całości
            oddaję się mojej pasji jaką jest tworzenie stron internetowych
            i&nbsp;aplikacji mobilnych. Już od najmłodszych lat interesowałem
            się komputerami. Programowaniem zaraziełem się w &nbsp;2014 roku. Od
            tamtej pory każdą wolną chwilę poświęcam nauce i&nbsp;realizacji
            różnych projektów w których używam Html, CSS (Sass), JavaScript,
            jQuery, WordPress, Bootstrap, React.js, Gatsby.js.
          </p>
        </div>
      </div>
    </main>
  </Layout>
);

export default SecondPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "CV.jpg" }) {
      childImageSharp {
        fixed(width: 240, height: 240) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
