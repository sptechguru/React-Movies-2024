import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Api_axio_Movies } from '../Axios_ApiHandler/Api_axio';
import { TMDBApi, apiMovieKey } from '../Axios_ApiHandler/Movies_Key';
import SpinnerBox from '../common/spinner';
import { addMoviesData } from '../../Redux_features/Containers/Actions/AddMovies_action';
import MovieCard from './MoviesCard';
import { useHistory, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './css/movies.css'
const Movies = () => {
  const [moviesData, newSetMovies] = useState([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // useDispacth redux data transfer Globally 
 
  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    try {
      setLoading(true);
      const response = await Api_axio_Movies.get(`${TMDBApi.apiBaseUrl}/trending/movie/day?language=en-Us&api_key=${TMDBApi.apiMovieKey2}`);
      // console.log('trending movies....', response.data.results);
      newSetMovies(response.data.results);
      dispatch(addMoviesData(response.data));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">{loading ? <SpinnerBox /> : null}</div>
      <div>
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


        <h1 className="text-3xl font-semibold text-gray-900 dark:text-black py-2 mx-3 py-2">
        Top Trending Movies </h1>
        <div className="container max-w-[1320px] mx-auto grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 gap-6 py-3">
          {error !== "" && error}
          {moviesData.map((props, index) => {
            return (
              <MovieCard
                key={props.id}
                movies={props}
              />
            );
          })}
        </div>
      </div>
    </>
  )
}
export default Movies;
