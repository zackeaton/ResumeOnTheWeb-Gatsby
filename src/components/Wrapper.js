import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false }).init();
    }
  }, []);

  return (
    <div className={styles.container}>
      <SEO />
      <Navigation />
      {children}
      <ReactTooltip />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
