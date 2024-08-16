import React from "react";
import about2 from "../images/about2.svg";
import Common from "./common/Common";
// import Slider from "../components/Slider";

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2 my-3">
        {" "}
        {/* About Us{" "} */}
      </h1>

      <Common
        name="SANTOSH PAL"
        word="I am a Full Stack Developer with expertise in various programming languages, including JavaScript, TypeScript, React.js, Angular, and Python Django. My goal is to excel as a professional in a highly competitive technological landscape, where outstanding performance is recognized with increasingly challenging responsibilities. I am eager to contribute to a reputable, growth-oriented organization in the field of development."
        imgsrc={'https://avatars3.githubusercontent.com/u/58684635?s=460&u=f7af97454174f4f3a0c1b2db9b79cf1206b9a424&v=4'}
        visit="https://sani.pythonanywhere.com/"
        btname="Read More .."
      />
      
    </>
  );
};

export default About;
