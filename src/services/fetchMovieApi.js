import axios from 'axios';

const KEY = '0d1e20f1e4ba2c80a2cf79512480b926';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrandingMovies = async () => {
    const response =await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}&language=en-US`
    );
    return response.data;
};


export const getMovieQuery = async query => {
    const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US`
    );
    return response.data;
};

export const getMovieById = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
};

export const getMovieCast = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data;
};

export const getMovieReviews = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data;
};