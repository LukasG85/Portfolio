import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Icons from "../components/global/SocialIcons";
import Typing from "../components/global/Typing";
import HeadingText from "../components/headingText";
import Head from "../components/Head";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Front End Developer`, `Web Developer`]} />
    <main className="home">
      <div className="home-info">
        <HeadingText title="Łukasz" subtitle="Gancarz" />
        <Typing />
        <div className="icons">
          <Icons />
        </div>
      </div>
      <Head />
    </main>
  </Layout>
);

export default IndexPage;
