import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { TMDBApi } from "../Axios_ApiHandler/Movies_Key";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import "./css/cards.css"


const MovieCard = (data) => {

    const [isLoading, setIsLoading] = useState(true)
    let props = data.movies;
    // console.log('latest movies', props);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading
                    ?
                    <div className="cards">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <NavLink to={`/movies-details/${props.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards shadow-lg rounded">
                            <img className="cards__img" src={TMDBApi.image_BaseUrl + props.poster_path} />
                            <div className="cards__overlay">
                                <div className="card__title">{props ? props.original_title : ""}</div>
                                <div className="card__runtime">
                                    {props ? props.release_date : ""}
                                    <span className="card__rating">{props ? props.vote_average : ""}<i className="fas fa-star" /></span>
                                </div>
                                <div className="card__description">{props ? props.overview.slice(0, 118) + "..." : ""}</div>
                            </div>
                        </div>
                    </NavLink>
                    
            }
        </>
    );
}
export default MovieCard;