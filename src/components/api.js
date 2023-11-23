import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingFilms(){
    
    const apiKey = '18a0b0a62e05a91cf2323f4a4ccd641e';
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(url);
    return response.data.results;
}

export async function fetchKeywordFilms(keyword){
    
    const apiKey = '18a0b0a62e05a91cf2323f4a4ccd641e';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=1&query=${keyword}`;
    const response = await axios.get(url);
    return response.data.results;
}

export async function fetchDitailsFilms(movieId){
    
    const apiKey = '18a0b0a62e05a91cf2323f4a4ccd641e';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
}

export async function fetchActors(movieId){
    
    const apiKey = '18a0b0a62e05a91cf2323f4a4ccd641e';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    const response = await axios.get(url);
    return response.data.cast;
}

export async function fetchReviews(movieId){
    
    const apiKey = '18a0b0a62e05a91cf2323f4a4ccd641e';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data.results;
}


//key api = 18a0b0a62e05a91cf2323f4a4ccd641e;
// Ключ доступа к API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGEwYjBhNjJlMDVhOTFjZjIzMjNmNGE0Y2NkNjQxZSIsInN1YiI6IjY1NWRmMGJmNjI5YjJjMDEzYmIwZWU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95KOzx-VwZ-R4Aauy3hj6FQRYG3w3duBUt-BX1hWc1s



