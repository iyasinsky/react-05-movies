import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
