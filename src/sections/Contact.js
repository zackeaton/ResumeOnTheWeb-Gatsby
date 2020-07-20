import React from "react";
import Heading from "../components/Heading";
import { IoIosPaperPlane, FaComments, FaEnvelope, } from "../components/Icons";
import Button from "../components/Button";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "contact/memoji-hello.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "contact" } }) {
        html
      }
    }
  `);
  
  return (
    <section id="contact">
      <Heading icon={IoIosPaperPlane} title="Contact" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div
          className="text-justify lg:col-span-3 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        </div>
        <div className="grid lg:grid-cols-6 gap-12 items-center">
        <Button
        className="mt-6"
        icon={FaEnvelope}
        title="Send Email"
        onClick={() => window.open("mailto:zackaryeaton@gmail.com?subject=About Your Resume On The Web", "_blank")}
      />
        <Button
        className="mt-6"
        icon={FaComments}
        title="Send Text"
        onClick={() => window.open("sms:+13148531547&body=Hey%20Zack,%20I%20want%20to%20talk%20to%20you%20about%20something,%20do%20you%20have%20a%20second?", "_blank")}
      />
      </div>
    </section>
  );
};

export default Contact;
