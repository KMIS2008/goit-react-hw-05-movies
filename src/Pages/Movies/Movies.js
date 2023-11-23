import FormSeach from "components/Form/Form";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import Loader from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import {fetchKeywordFilms} from "../../components/api"

export default function Movies(){
    const[films, setFilms] = useState([]);
    const[loading, setIsLoading] = useState(false);

    useEffect(()=>{
        const addListFilms = async()=>{
            try {
                setIsLoading(true);
                // setError(false);
               
                 const listFilms = await fetchKeywordFilms();
                 setFilms(listFilms)
              
               } catch (error) {
                toast.error('ERORR. Please try reloading this page!');
                // setError(true);
               } finally {
                 setIsLoading(false);
               }
        }

        addListFilms()
    }, [setIsLoading]
    )

    return(
        <div>
            <FormSeach/>
            {loading && (<Loader/>)}
            <MoviesList films={films}/>
            <ToastContainer />

        </div>
    )

        
    
}