import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import {fetchDitailsFilms} from '../../api';
import Loader from 'components/Loader';
import { useParams } from "react-router-dom";


export default function MovieDetails(){
    const params = useParams();

    const[loading, setIsLoading]=useState();
    const[ditail, setDitail]=useState();

    useEffect(()=>{
        const addDitailsFilm = async()=>{
            try {
                setIsLoading(true);
                // setError(false);
               
                 const ditailFilm = await fetchDitailsFilms(params.movieId);
                 setDitail(ditailFilm)
              
               } catch (error) {
                toast.error('ERORR. Please try reloading this page!');
                // setError(true);
               } finally {
                 setIsLoading(false);
               }
        }

        addDitailsFilm();
    },[params.movieId, setIsLoading, setDitail])

    return(
        <main>
             {loading && (<Loader/>)}
             <ToastContainer/>
        </main>
    )
}