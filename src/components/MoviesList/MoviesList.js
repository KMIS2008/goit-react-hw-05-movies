// import TrendFilm from "components/TrendFilm/TrendFilm";
import { useLocation } from "react-router-dom";
import { Link} from "react-router-dom";
import {List,
        Item} from "./ListTrendingFilms.styled";

export const MoviesList=({films})=>{
    const location = useLocation();

    return (
        <div>
           <List>
           {films.map(film=>{
            return (
                    <Item key={film.id}>
                        <Link to={`/movies/${film.id}`} state={{from: location}}>
                            {film.title}
                        </Link>

                    </Item>
            )
           })} 
           </List>
        </div>
    )
}