import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Cast = lazy(() => import('../pages/Cast/Cast'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
     
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<MovieSearch />} />

        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

         <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
};
