import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import {fetchDitailsFilms} from '../../components/api';
import Loader from "components/Loader";
import { useLocation, useParams } from "react-router-dom";

import AboutFilm from "components/AboutFilm/AboutFilm";
import{LinkButton} from "./MovieDetails.styled";


export default function MovieDetails(){
    const params = useParams();
    const location = useLocation();
    const backLocationRef = useRef(location);
    const backLocation = backLocationRef.current.state?.from ?? '/';

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

    if (!ditail) {
    return;
  }


    return(
        <main>
             {loading && (<Loader/>)}
             <LinkButton to={backLocation}>Go back</LinkButton>
             <AboutFilm ditails={ditail}/>
             <ToastContainer />
        </main>
    )
}