import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import { MdPerson, IoIosPaperPlane } from "../components/Icons";
import Button from "../components/Button";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about-me/memoji.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <section id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
          <Button
        className="mt-6"
        icon={IoIosPaperPlane}
        title="Send Email"
        onClick={() => window.open("mailto:zackeaton@gmail.com?subject=About%20Your%20Website", "_blank")}
      />
        </div>
        <div
          className="text-justify lg:col-span-4 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
