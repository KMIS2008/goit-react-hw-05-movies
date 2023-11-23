import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import {fetchTrendingFilms} from "../../components/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MoviesList} from "../../components/MoviesList/MoviesList";

export default function Home (){

const[loading, setIsLoading]=useState(false);
// const[error, setError]=useState(false);
const[films, setFilms]=useState([]);


useEffect(()=>{
    const addListFilms = async()=>{
        try {
            setIsLoading(true);
            // setError(false);
           
             const listFilms = await fetchTrendingFilms();
             setFilms(listFilms)
          
           } catch (error) {
            toast.error('ERORR. Please try reloading this page!');
            // setError(true);
           } finally {
             setIsLoading(false);
           }
    }
    addListFilms();
},[])

    return(
    <main>
        <h1> Trending today </h1>
        {loading && (<Loader/>)}
        <MoviesList films={films}/>
        <ToastContainer />
    </main>
    )
}