import React from "react";

const Results = (props) => {
  const img = `https://source.unsplash.com/400x300?${props.name}`;

  return (
    <>
      <div className="container-fluid bg p-3  m-auto text-center">
        <div className="container">
          <img
            className="img-fluid img-responsive w-100"
            src={img}
            alt="search"
          />
        </div>
      </div>
    </>
  );
};

export default Results;
