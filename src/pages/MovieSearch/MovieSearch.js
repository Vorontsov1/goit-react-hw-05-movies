import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/fetchMovieApi';
import MoviesList from 'components/MovieList/MovieList';
import Loading from 'components/Loading/Loading';
import s from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState(null);
  const [totalRezultMovie, setTotalRezultMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovies(null);
    setTotalRezultMovie(null);
    setShowLoading(true);

    API.getMovieQuery(query)
      .then(data => {
        setMovies(data.results);
        setTotalRezultMovie(data.total.results);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="query"
          className="s.input"
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />

        <button type="submit" className={s.submit}>
          Search
        </button>
      </form>

      {showLoading && <Loading />}
      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};


export default MovieSearch;