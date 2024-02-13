import { useEffect, useState } from 'react';
import fetchMovies from '../../api/api';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedTrendingMovies = await fetchMovies({
          abortController: controller,
        });

        setTrendingMovies(fetchedTrendingMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <TrendingMovies movies={trendingMovies} />
      {error && <p>Ooops error</p>}
    </div>
  );
};

export default HomePage;
