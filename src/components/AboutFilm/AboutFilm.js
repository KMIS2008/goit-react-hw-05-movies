import { Link, Outlet } from "react-router-dom";
import {Container} from "./AboutFilms.styled";
import {InfoFilm, GenreInfo, Information} from "./AboutFilms.styled";


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
            <Container>
                             <img
            width="250px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt="poster"
            />

            <InfoFilm>

               <h3>{title}</h3>
               <p>User score: {popularity}</p>
               <h3>Overview</h3>
               <p>{overview}</p>
               <h3>Genres</h3>
               <GenreInfo>
                  {genres.map(genre=>{
                    return (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    )
                  })}
               </GenreInfo>

            </InfoFilm>
            </Container>

            <Information>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </Information>

        </div>

    )
}