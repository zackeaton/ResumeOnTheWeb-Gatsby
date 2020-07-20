import React from "react";
import styles from "./index.module.css";
import Footer from "../sections/Footer";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Achievements from "../sections/Achievements";
import Blog from "../sections/Blog";
import Certifications from "../sections/Certifications";
// import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
// import Languages from "../sections/Languages";
import Music from "../sections/Music";
import Conferences from "../sections/Conferences";
import Photography from "../sections/Photography";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <Resume />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <Skills />
        <Projects />
        <div className={styles.achievementsCertificationConferences}>
          <div>
            <Achievements />
          </div>
          <div>
            <Certifications />
          </div>
          <div>
            <Conferences />
          </div>
        </div>
        {/* <Languages /> */}
        <Photography />
        <Blog />
        <Music />
        {/* <Contact /> */}
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
