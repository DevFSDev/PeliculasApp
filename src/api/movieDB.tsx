import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '207b2c84dab905c14c8ab5278eaa0d39',
        language: 'es-Es',
    } 
});

export default movieDB;