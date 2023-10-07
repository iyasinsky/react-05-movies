import { List } from './index.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const DEFAULT_IMG = 'https://placehold.co/200x300';

const CastList = ({ cast }) => {
  if (!cast.length) {
    return <p>No information about the actors</p>;
  }

  return (
    <List>
      {cast.map(({ id, name, character, profile_path }) => {
        const profileImg = profile_path
          ? `${BASE_URL}${profile_path}`
          : DEFAULT_IMG;

        return (
          <li key={id}>
            <img src={profileImg} alt={name} />
            <p>
              <b>{name}</b>
            </p>
            <p>{character}</p>
          </li>
        );
      })}
    </List>
  );
};

export default CastList;
