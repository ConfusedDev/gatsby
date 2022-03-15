import React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is a child that will be passed to layout.</p>
      <StaticImage alt="Test Image" src="../images/icon.png"/>
    </Layout>
  );
};

export default IndexPage
