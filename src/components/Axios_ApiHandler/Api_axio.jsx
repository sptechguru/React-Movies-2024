import axios from "axios";

export const Api_axio = axios.create({
    baseURL: 'https://dummyjson.com/'
})


export const Api_axio_Movies = axios.create({
    baseMovieURL: 'https://www.omdbapi.com/'
})



export const Api_axio_Crud = axios.create({
    baseCrudURL: 'https://freeapi.miniprojectideas.com/api/ClientStrive/'
})
