import { List } from './index.styled';

const ReviewsList = ({ reviews }) => {
  if (!reviews.length) {
    return <p>No information about reviews</p>;
  }

  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <b>Autor: {author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </List>
  );
};

export default ReviewsList;
