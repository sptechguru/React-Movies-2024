import React from "react";
import hero from "../images/post.png";
import we from "../images/we.png";
import bests from "../images/bests.png";

const Slider = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner cbg">
          <div class="carousel-item active">
            <img src={bests} class="d-block w-100" alt="bests " />
          </div>
          <div class="carousel-item">
            <img src={we} class="d-block w-100" alt="market" />
          </div>
          <div class="carousel-item">
            <img src={hero} class="d-block w-100" alt="hero" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
