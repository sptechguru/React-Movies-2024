import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import "./css/movies_details.css";
import { useDispatch } from 'react-redux';
import { Api_axio, Api_axio_Movies } from '../Axios_ApiHandler/Api_axio';
import { TMDBApi, apiMovieKey } from '../Axios_ApiHandler/Movies_Key';
import SpinnerBox from '../common/spinner';
import MovieCard from './MoviesCard';
import { similarMovies } from '../../Redux_features/Containers/Actions/AddMovies_action';

const MoviesDetails = () => {

  const getIdFromUrl = () => {
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);
    // console.log("movies id ", id);
    return id;
  };
  const [movieData, setMoviesDetails] = useState([]);
  const [similarMovieData, setsimilarMoviesDetails] = useState([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user_Id = getIdFromUrl();
  // console.log("movies id render updates  ", user_Id);


  useEffect(() => {
    getMoviesDetatilsId();
    getSimilarMovies();
  }, [user_Id]);

  const getMoviesDetatilsId = async () => {
    try {
      setLoading(true);
      const response = await Api_axio_Movies.get(`${TMDBApi.apiBaseUrl}/movie/${user_Id}?api_key=${TMDBApi.apiMovieKey2}`);
      // console.log(response.data);
      setMoviesDetails(response.data);
      // dispatch(MoviesDetails(response.data));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  const getSimilarMovies = async () => {
    try {
      setLoading(true);
      const response = await Api_axio_Movies.get(`${TMDBApi.apiBaseUrl}/movie/${user_Id}/similar?api_key=${TMDBApi.apiMovieKey2}`);
      // console.log('Similar Movies', response.data.results);
      setsimilarMoviesDetails(response.data.results);
      dispatch(similarMovies(response.data.results));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="text-center">{loading ? <SpinnerBox /> : null}</div>
      <div className="movie">
        <div className="movie__intro overflow-hidden">
          <a href={TMDBApi.image_BaseUrl + movieData.backdrop_path} target="_blank">
            <img src={TMDBApi.image_BaseUrl + movieData.backdrop_path} className="movie__backdrop hover:scale-125 duration-1000" alt={TMDBApi.image_BaseUrl + movieData.backdrop_path} />
          </a>
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox overflow-hidden">
              <a href={TMDBApi.image_BaseUrl + movieData.poster_path} target="_blank">
                <img src={TMDBApi.image_BaseUrl + movieData.poster_path} className="movie__poster hover:scale-125 duration-1000" alt={TMDBApi.image_BaseUrl + movieData.poster_path} />
              </a>
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">{movieData ? movieData.original_title : ""}</div>
              <div className="movie__tagline">{movieData ? movieData.tagline : ""}</div>
              <div className="movie__rating">
                {movieData ? movieData.vote_average : ""} <i class="fas fa-star" />
                <span className="movie__voteCount">{movieData ? "(" + movieData.vote_count + ") votes" : ""}</span>
              </div>
              <div className="movie__runtime">{movieData ? movieData.runtime + " mins" : ""}</div>
              <div className="movie__releaseDate">{movieData ? "Release date: " + movieData.release_date : ""}</div>
              <div className="movie__genres">
                {
                  movieData && movieData.genres
                    ?
                    movieData.genres.map(genre => (
                      <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                    ))
                    :
                    ""
                }
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{movieData ? movieData.overview : ""}</div>
            </div>

          </div>
        </div>
        <div className="movie__links">
          <div className="movie__heading">Useful Links</div>
          {
            movieData && movieData.homepage && <a href={movieData.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
          }
          {
            movieData && movieData.imdb_id && <a href={"https://www.imdb.com/title/" + movieData.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
          }
        </div>

        {/* <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {
            movieData && movieData.production_companies && movieData.production_companies.map(company => (
              <>
                {
                  company.logo_path
                  &&
                  <span className="productionCompanyImage">
                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                    <span>{company.name}</span>
                  </span>
                }
              </>
            ))
          }
        </div> */}
        
        <div className="movie__heading py-4">Similar Movies</div>
        <div className="container max-w-[1320px] mx-auto grid lg:grid-cols-6 md:grid-cols-6 gap-2">
          {similarMovieData.map((props, index) => {
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

export default MoviesDetails;
