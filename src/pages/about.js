import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import About from "../components/About";

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default SecondPage;
