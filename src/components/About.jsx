import React from "react";
import about2 from "../images/about2.svg";
import Common from "./common/Common";
// import Slider from "../components/Slider";

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2 my-3">
        {" "}
        About Us{" "}
      </h1>

      <Common
        name="Welcome to "
        word="I am Front End Developer With Knowledge of varrious Programing Language Like  JavaScript Typescript React js & Angular Framework And Python Django. To become a successful professional in a highly competitive technological world where performance is rewarded with new challenging responsibilities and to serve a reputed growth-oriented industry in the field of Development.        "
        imgsrc={about2}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
