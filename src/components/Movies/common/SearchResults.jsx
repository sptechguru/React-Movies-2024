import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Api_axio_Movies } from '../../Axios_ApiHandler/Api_axio';
import { TMDBApi } from '../../Axios_ApiHandler/Movies_Key';

const SearchResults = () => {
    // add search functionlity
    let [searchText, setSearchTerm] = useState('Harry');
    const history = useHistory();
    const [search, setSerach] = useState(false);
    const [searchData, setSerachList] = useState([]);
    const [error, setError] = useState([""]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText) {
            // console.log("seachterm", searchText);
            history.push(`/search-details/${searchText}`);
        }
    }
    const handleMovies = () => {
        setSerach(true);
        history.push(`/movie`);
    }

    useEffect(() => {
        getSearchMoviesName();
    }, [searchText]);


    const getSearchMoviesName = async () => {
        try {
            setLoading(true);
            const response = await Api_axio_Movies.get(`${TMDBApi.apiBaseUrl}/genre/movie/list?api_key=${TMDBApi.apiMovieKey2}`);
            // console.log('search Results Menu Movies??????..', response.data.genres);
            setSerachList(response.data.genres);
            // dispatch(searchMovies(response.data));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return (
        <>
            <form className="flex items-center">
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                        </svg>
                    </div>
                    <input type="text" id="simple-search"
                        value={searchText}
                        placeholder="Search Movies & Shows.."
                        onChange={e => setSearchTerm(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        list="searchMovie"
                         />
                        <datalist id="searchMovie">
                        {searchData.map((item, index) => (
                        <option key={index} value={item.name} />
                        ))}
                        </datalist>
    
                </div>

                <button type="button" onClick={e => handleSubmit(e)} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search Movies</span>
                </button>
            </form>
        </>
    );
}

export default SearchResults;
