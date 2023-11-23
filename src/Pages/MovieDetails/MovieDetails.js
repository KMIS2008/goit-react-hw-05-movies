import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import {fetchDitailsFilms} from '../../components/api';
import Loader from "components/Loader";
import { useLocation, useParams } from "react-router-dom";
import { Link} from "react-router-dom";
import AboutFilm from "components/AboutFilm/AboutFilm";


export default function MovieDetails(){
    const params = useParams();
    const location = useLocation();
    const backLocation = location.state?.from ?? '/';

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
             <Link to={backLocation}>Go back</Link>
             <AboutFilm ditails={ditail}/>
             <ToastContainer />
        </main>
    )
}