import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled } from './index.styled';

const Layout = () => (
  <Container>
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="movies">Movies</NavLinkStyled>
      </nav>
    </Header>
    <Suspense fallback={<p>Layout Loading...</p>}>
      <Outlet />
    </Suspense>
  </Container>
);

export default Layout;
