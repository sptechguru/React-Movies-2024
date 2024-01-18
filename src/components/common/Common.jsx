import React from "react";
// import hero from "../images/post.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <section className="container max-w-[1320px] grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12  py-4 gap-4 mx-auto" id="header">
      <div className="col-span-6 header_img ">
        <img
          className="animated mx-auto"
          src={props.imgsrc}
          alt="hero user"
        />
      </div>
      <div className="col-span-6 py-5 mx-auto">
        <h1 className="lg:text-3xl md:text-3xl sm:text-xxl py-3 font-semibold">
         {props.name} <span className="text-blue-900 font-semibold">Sptech</span>
        </h1>
        <p className="lg:text-2xl md:text-1xl sm:text-xxl font-normal text-gray-900 dark:text-balck">{props.word}</p>
        <div className="py-5">
          <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full mb-10" to={props?.visit}>
            {props?.btname}
          </NavLink>
        </div>
        <br/>
      </div>
    </section>
  );
};

export default Common;
