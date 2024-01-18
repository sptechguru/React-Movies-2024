import React from "react";
import Clock from './Clock';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 py-2">
      <a  href="https://sptectreactjs-weather.netlify.app/" target="_blank"><span className="sr-only">(current)</span>
        <p className="text-center font-semibold text-white">@2023 Sptech Copyright & Click Here. | .All Rights| Terms And condition </p>
        </a>   <Clock />
      </footer>

    </>
  );
};

export default Footer;
