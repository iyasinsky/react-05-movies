import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 0.5rem;
  padding: 0;

  li {
    list-style-type: none;
  }
`;
