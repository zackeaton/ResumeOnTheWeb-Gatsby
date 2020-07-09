import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">zack</span>:{" "}
        <span className="text-orange-400">Array</span>&lt;
        <span className="text-green-400">Ingredient</span>&gt;{" "}
        <span className="text-blue-600">=</span> [
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Gamer</span>,{" "}
        <span className="text-red-500">Developer</span>,{" "}
        <span className="text-red-500">Photographer</span>,{" "}
        <span className="text-red-500">Foodie</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Coffee</span>,{" "}
        <span className="text-red-500">Candy</span>, ...
        <span className="text-red-500">allthingsSpicy</span>,
      </div>
      <div>];</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
