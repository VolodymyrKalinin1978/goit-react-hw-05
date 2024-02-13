import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/api';
import Reviews from './Reviews/Reviews';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovieReviews = await getMovieReviews(movieId);
        console.log(fetchedMovieReviews);
        setMovieReviews(fetchedMovieReviews);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {movieReviews.length > 0 && movieReviews !== null && movieReviews !== undefined ? (
        // Вміст, коли movieReviews існує і не є null
        <Reviews reviews={movieReviews} />
      ) : (
        // Вміст, коли movieReviews є null
        <p>We dont have any reviews for this movie.</p>
      )}
      {error && <p>Ooops error</p>}
    </div>
  );
};

export default MovieReviews;
