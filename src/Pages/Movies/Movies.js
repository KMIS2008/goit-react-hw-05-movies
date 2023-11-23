import FormSeach from "components/Form/Form";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import Loader from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import {fetchKeywordFilms} from "../../components/api"
import { useSearchParams } from "react-router-dom";

export default function Movies(){
    const[films, setFilms] = useState([]);
    const[loading, setIsLoading] = useState(false);
    const[searchParams, setSearchParams]=useSearchParams();
    const query = searchParams.get('query') ?? "";

    


    useEffect(()=>{
        if (query === '') {
            return;
          };
          if (films.length > 0) {
            return;
          };

        const addListFilms = async()=>{
            try {
                setIsLoading(true);
                // setError(false);
               
                 const listFilms = await fetchKeywordFilms(query);
                 setFilms(listFilms)
              
               } catch (error) {
                toast.error('ERORR. Please try reloading this page!');
                // setError(true);
               } finally {
                 setIsLoading(false);
               }
        }

        addListFilms()
    }, [query, films] )

    const onSubmitSearch = value => {
        if (value === '') {
          setSearchParams({});
          return;
        }
        setSearchParams({ query: value });
        setFilms([]);
      };

    //   const onChange=event=>event.target.value

 
    return(
        <div>
            <FormSeach onSubmitSearch={onSubmitSearch} />
            {loading && (<Loader/>)}
            <MoviesList films={films}/>
            <ToastContainer />

        </div>
    ) 
}