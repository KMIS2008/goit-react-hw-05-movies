import { useEffect, useState } from "react";
import Loader from "components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import {fetchReviews} from "../api";
import {ContainerReviews} from "./Reviews.styled";

export default function Reviews(){

    const[loading, setIsLoading]=useState(false);
    const[reviewsInfo, setReviewsInfo]=useState([]);
    const params = useParams();


    useEffect(()=>{
        const addreviewsInfo = async()=>{
            try {
                setIsLoading(true);
                // setError(false);
               
                 const info = await fetchReviews(params.movieId);
                 setReviewsInfo(info)
              
               } catch (error) {
                toast.error('ERORR. Please try reloading this page!');
                // setError(true);
               } finally {
                 setIsLoading(false);
               }
        }

        addreviewsInfo()

        if (!params.movieId) return;
        
    },[params.movieId, setReviewsInfo, setIsLoading])

    return (
        <div>
           {loading && (<Loader/>)}  
           <ul>
              {reviewsInfo.map(review => 
                (<ContainerReviews key={review.id}>
                      <h2>Author: {review.author}</h2>
                      <p>{review.content}</p>
                </ContainerReviews>)
              )}
           </ul>

           {reviewsInfo.length === 0 && (<h3>We have not info about Rewiews </h3>)}
           <ToastContainer/>

        </div>
       
    )
}