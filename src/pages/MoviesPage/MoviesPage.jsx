import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearch from '../../components/MoviesSearch/MoviesSearch';
import { getMovieSearch } from '../../api/api';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';

const MoviesPage = () => {
  const [searchMuvies, setSearchMuvies] = useState([]);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const filter = params.get('Search') || '';

  const changeFilter = newFilter => {
    setParams({ Search: newFilter });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setParams({ Search: e.target.elements.query.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovieSearch = await getMovieSearch(filter);
        setSearchMuvies(fetchedMovieSearch);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div>
      <MoviesSearch onSearch={handleSubmit} value={filter} onChange={changeFilter} />
      {searchMuvies && <TrendingMovies movies={searchMuvies} />}
      {error && <p>Oops error</p>}
    </div>
  );
};

export default MoviesPage;
