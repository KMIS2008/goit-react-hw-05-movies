import { useEffect, useState } from "react";
import Loader from "components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import {fetchReviews} from "../api";

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
    },[params.movieId, setReviewsInfo, setIsLoading])

    return (
        <div>
           {loading && (<Loader/>)}  
           <ul>
              {reviewsInfo.map(review => 
                (<li key={review.id}>
                      <h2>Author: {review.author}</h2>
                      <p>{review.content}</p>
                </li>)
              )}
           </ul>

           {reviewsInfo.length === 0 && (<h3>We have not info about Cast </h3>)}
           <ToastContainer/>

        </div>
       
    )
}