import React from "react";
// import hero from "../images/hero.png";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const handleClick = () => {
    const id = props.id; // Get the dynamic value from wherever you want (e.g., state, API, etc.)
    history.push(`products-details/${id}`);
  };
  return (
    <>
      <div className="sp mb-4">
        <div className="shadow-lg rounded py-5">
          <div className="overflow-hidden">
            <div className="text-right">
              <h5 className="font-weight-bold badge badge-pill badge-success text-capitalize">{props.media_type}&nbsp;{props.release_date}</h5>
            </div>
            <img src={props.imgsrc} className="hover:scale-125 duration-1000" alt={props.imgsrc} />
            <h6 className="card-title font-weight-bold text-capitilize py-2">{props.tittle}</h6>
            <h5 className="card-title font-weight-bold">{props.tittle} </h5>
            <h5 className="font-weight-bold py-2">{props.Category}</h5>
            <span className="text-danger font-weight-bold">{props.Price} Rs.</span> &nbsp; &nbsp;
            <span className="card-title font-weight-bold">{props.Stock} Stock </span>&nbsp; &nbsp;
            <span className="card-title font-weight-bold">{props.Rating} ***</span>
            <p>{props.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded" onClick={handleClick}>Read More</button>

          </div>
        </div>
      </div>
    </>
  );

};

export default Card;
