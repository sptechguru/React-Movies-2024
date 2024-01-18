import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../css/movies.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const  CarsuelSlide = (data) => {
    // console.log('carsuel',data);
  return (
    <>
        <div className="poster">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={2}
            infiniteLoop={true}
            showStatus={false}
          >
            {
              moviesData.map(movie => (
                <NavLink style={{ textDecoration: "none", color: "white" }} to={`/movies-details/${movie.id}`} >
                  <div className="posterImage">
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                  </div>
                  <div className="posterImage__overlay">
                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                    <div className="posterImage__runtime">
                      {movie ? movie.release_date : ""}
                      <span className="posterImage__rating">
                        {movie ? movie.vote_average : ""}
                        <i className="fas fa-star" />{" "}
                      </span>
                    </div>
                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                  </div>
                </NavLink>
              ))
            }
          </Carousel>
        </div>
    </>
  )
}

export default CarsuelSlide;
