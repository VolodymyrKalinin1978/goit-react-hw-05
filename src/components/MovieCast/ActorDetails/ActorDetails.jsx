import { ContainerActor } from './ActorDetails.styled';

const ActorDetails = ({ movieCredits }) => {
  return (
    <ContainerActor>
      {movieCredits.map(actor => (
        <li key={actor.id}>
          <div>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={`${actor.name} profile`}
              />
            ) : (
              <img src={`https://via.placeholder.com/200x300`} alt="Зображення актора" />
            )}

            <h2>{actor.name}</h2>

            <p>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ContainerActor>
  );
};

export default ActorDetails;
