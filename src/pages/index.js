import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typewriter from "typewriter-effect";
import Icons from "../components/pages/SocialIcons";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Front End Developer`, `Web Developer`]} />
    <main id="home">
      <h1 className="lg-heading">
        Łukasz <span className="text-secondary">Gancarz</span>
      </h1>
      <h2 className="sm-heading">
        <Typewriter
          options={{
            strings: [
              `Hi, I'm a web developer`,
              `I create websites`,
              `And mobile applications`
            ],
            autoStart: true,
            loop: true
          }}
        />
      </h2>
      <div className="icons">
        <Icons />
      </div>
    </main>
  </Layout>
);

export default IndexPage;
