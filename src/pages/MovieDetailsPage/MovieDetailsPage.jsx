import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import BackLink from '../../components/BackLink/BackLink';
import { WraperOutlet } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovieDetails = await getMovieDetails(movieId);
        setMovieDetails(fetchedMovieDetails);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <BackLink href={backLinkRef.current ?? '/movies'}>Go Back</BackLink>
      {movieDetails && <MovieDetails movie={movieDetails} />}
      {error && <p>Ooops error</p>}
      <WraperOutlet>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </WraperOutlet>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
