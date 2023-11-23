import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from "react-router-dom";
// import AppLayout from './AppLayout/AppLayout';
// import Home from '../Pages/Home/Home';
// import Movies from '../Pages/Movies/Movies';
// import MovieDetails from '../Pages/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route  path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Home/>} />
      </Routes>

      <GlobalStyle/>
    </div>
    
  );
};


// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.