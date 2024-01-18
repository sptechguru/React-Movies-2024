import React, { useState } from "react";
import Results from "./Results";
import we from "../images/we.png";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };

  return (
    <>
      <div className="container w-50 mx-auto p-2 " id="header">
        <h1 className="text-center font-weight-bold text-dark p-3">
          Search <span className="text-danger font-weight-bold">Google</span>{" "}
          images for{" "}
        </h1>
        <div className="logo p-5">
          <img className="ml-3 animated" src={we} alt="dfdf" />
        </div>

        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search anything Else "
          value={img}
          onChange={inputEvent}
        />
      </div>

      {img === "" ? null : <Results name={img} />}
    </>
  );
};

export default Search;
