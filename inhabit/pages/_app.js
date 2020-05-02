import React from "react";
import App, { Container } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style global jsx>{`
          html {
            font-size: 100%;
            box-sizing: border-box;
          }

          body {
            margin: 0px;
            padding: 0px;
            min-height: 100vh;
            font-family: "Jost", sans-serif;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
