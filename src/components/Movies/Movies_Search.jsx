import React, { useEffect, useState } from 'react'
import { TMDBApi } from '../Axios_ApiHandler/Movies_Key';
import { Api_axio_Movies } from '../Axios_ApiHandler/Api_axio';
import MovieCard from './MoviesCard';
import SpinnerBox from '../common/spinner';
import { NavLink } from "react-router-dom";
import { searchMovies } from '../../Redux_features/Containers/Actions/AddMovies_action';
import { useDispatch } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './css/movies.css'


const Movies_Search = () => {
    const [searchmovieData, setSearchMoviesDetails] = useState([]);
    const [error, setError] = useState([""]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch(); // useDispacth redux data transfer Globally 

    const getQuerryFromUrl = () => {
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf("/") + 1);
        // console.log("movies id ", id);
        return id;
    };

    let searchTerm = getQuerryFromUrl();
    //   console.log("search queery", searchTerm);

    useEffect(() => {
        getSearchMovies();
        return () => {
            // dispatch(removeProdcut());
        }
    }, [searchTerm]);

    const getSearchMovies = async () => {
        try {
            setLoading(true);
            const response = await Api_axio_Movies.get(`${TMDBApi.apiBaseUrl}/search/movie?api_key=${TMDBApi.apiMovieKey2}&query=${searchTerm}`);
            // console.log('search Movies??????..', response.data.results);
            setSearchMoviesDetails(response.data.results);
            dispatch(searchMovies(response.data.results));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const filterMovies = (search) => {
        // console.log("seach filter", search)
        let sortedMovies = [];
        switch (search) {
            case 'ReleaseYear':
                sortedMovies = [...searchmovieData].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                break;

            case 'Popularity':
                sortedMovies = [...searchmovieData].sort((a, b) => b.popularity - a.popularity);
                break;

            case 'Ratings':
                sortedMovies = [...searchmovieData].sort((a, b) => b.vote_average - a.vote_average);
                break;

            default:
                break;
        }

        setSearchMoviesDetails(sortedMovies);
    }


    return (
        <>
            <div className="text-center">{loading ? <SpinnerBox /> : null}</div>

            <div className="container max-w-[1320px]  grid lg:grid-cols-3 md:grid-cols-3 gap-6 py-5 mx-5">
                <div >
                    <NavLink to="/movie">
                        <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Back</button>
                    </NavLink>
                </div>

                <div>
                    <h5 className='text-2xl'>Your Search Results For <span className="text-blue-800 font-semibold text-uppercase"> &quot;{searchTerm} &quot;</span></h5>
                </div>

                <div>
                    <select onChange={(e) => filterMovies(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-label=".form-select-sm example">
                        {/* <option>Sort By</option> */}
                        <option value="ReleaseYear">Release Year</option>
                        <option value="Popularity">Popularity</option>
                        <option value="Ratings">Ratings</option>
                    </select>
                </div>
            </div>
{/* 
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        searchmovieData.map(movie => (
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
            </div> */}
            <br />
            
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-black py-2 mx-3 py-2">
        Similar Movies </h1>
            <div className="container max-w-[1320px] mx-auto grid lg:grid-cols-6 md:grid-cols-6 gap-5">
                {searchmovieData.map((props, index) => {
                    return (
                        <MovieCard
                            key={props.id}
                            movies={props}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Movies_Search;
