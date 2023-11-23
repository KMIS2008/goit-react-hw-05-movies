import { useEffect, useState } from "react";
import {fetchActors} from "../api";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {ContainerCast} from "./Cast.styled";
import Loader from "components/Loader";

export default function Cast(){
    const[loading, setIsLoading]=useState(false);
    const[castInfo, setCastInfo]=useState([]);
    const params = useParams();

    useEffect(()=>{
        const addCastInfo = async()=>{
            try {
                setIsLoading(true);
                // setError(false);
               
                 const info = await fetchActors(params.movieId);
                 setCastInfo(info)
              
               } catch (error) {
                toast.error('ERORR. Please try reloading this page!');
                // setError(true);
               } finally {
                 setIsLoading(false);
               }
        }
        
        addCastInfo();

        if (!params.movieId) return;

    },[params.movieId])

    // const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    return (
        <ContainerCast>
           {loading && (<Loader/>)}
           <ul>
           {castInfo.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="150px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <h5>{name}</h5>
            <p>Character: {character}</p>
          </li>
        ))}
           </ul>
           {castInfo.length === 0 && (<h3>We have not info about Cast </h3>)}
           <ToastContainer/>            
        </ContainerCast>
    )

}