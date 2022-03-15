import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import * as Style from "./layout.module.css";

const Layout = ({pageTitle, children}) => {

  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
  `);
  
  return (
    <div className={Style.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={Style.siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={Style.navLinks}>
          <li className={Style.navLinkItem}>
            <Link to="/" className={Style.navLinkText}>Home</Link>
          </li>
          <li className={Style.navLinkItem}>
            <Link to="/about" className={Style.navLinkText}>About</Link>
          </li>
          <li className={Style.navLinkItem}>
            <Link to="/blog" className={Style.navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={Style.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;