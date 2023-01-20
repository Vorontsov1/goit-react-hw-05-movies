import {Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react';

const Cast = lazy(() => import('components/Cast/cast'))
const Home = lazy(() => import('pages/Home.js'));
const MovieDetails = lazy(() => import('components/MovieDetails/movieDetails'));
const Movies = lazy(()=> import('pages/Movies.js'));
const Reviews = lazy(() => import('pages/Reviews.js'));
const NotFound = lazy(() => import('components/NotFound/notFound'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        <Route path='movies' element={<Movies />} />
        <Route path='cast' element={<Cast />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
     
   
  );
};
