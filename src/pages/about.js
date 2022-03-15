import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is a separate child that will be passed to props.children</p>
    </Layout>
  );
};

export default AboutPage;