import { Link } from "react-router-dom";


export default function AboutFilm({ditails}){
    const {
        title,
        popularity,
        overview,
        genres,
        poster_path,
      } = ditails || {};

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    
    return (
        <div>
             <img
            width="250px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt="poster"
            />

            <div>

               <h2>{title}</h2>
               <p>User score: {popularity}</p>
               <h2>Overview</h2>
               <p>{overview}</p>
               <h2>Genres</h2>
               <ul>
                  {genres.map(genre=>{
                    return (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    )
                  })}
               </ul>

            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>

        </div>

    )
}