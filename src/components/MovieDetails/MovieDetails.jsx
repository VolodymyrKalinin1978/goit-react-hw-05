import { ContainerMovies } from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const userScorePercentage = Math.round((movie.vote_average / 10) * 100);
  const releaseYear = new Date(movie.release_date).getFullYear();
  return (
    <ContainerMovies>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={300}
        alt={movie.title}
      />
      <div>
        <h1>
          {movie.title} ({releaseYear})
        </h1>
        <p>User Score: {userScorePercentage}%</p>
        <p>
          Homepage:{' '}
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            {movie.title}
          </a>
        </p>
        <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </ContainerMovies>
  );
};

export default MovieDetails;
