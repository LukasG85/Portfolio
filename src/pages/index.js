import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Icons from "../components/global/SocialIcons";
// import Typing from "../components/global/Typing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Front End Developer`, `Web Developer`]} />
    <main className="home">
      <h1 className="lg-heading">
        Łukasz <span className="text-secondary">Gancarz</span>
      </h1>
      <h2 className="sm-heading">{/* <Typing /> */}</h2>
      <div className="icons">
        <Icons />
      </div>
    </main>
  </Layout>
);

export default IndexPage;
