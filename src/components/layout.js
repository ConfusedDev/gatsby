import { Link } from "gatsby";
import React from "react";
import * as Style from "./layout.module.css";

const Layout = ({pageTitle, children}) => {
  return (
    <div className={Style.container}>
      <title>
        {pageTitle}
      </title>
      <nav>
        <ul className={Style.navLinks}>
          <li className={Style.navLinkItem}>
            <Link to="/" className={Style.navLinkText}>Home</Link>
          </li>
          <li className={Style.navLinkItem}>
            <Link to="/about" className={Style.navLinkText}>About</Link>
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