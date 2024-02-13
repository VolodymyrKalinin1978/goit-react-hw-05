import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/api';
import ActorDetails from './ActorDetails/ActorDetails';

const MovieCast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovieCredits = await getMovieCredits(movieId);
        console.log(fetchedMovieCredits);
        setMovieCredits(fetchedMovieCredits);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {movieCredits && <ActorDetails movieCredits={movieCredits} />}
      {error && <p>Ooops error</p>}
    </div>
  );
};

export default MovieCast;
