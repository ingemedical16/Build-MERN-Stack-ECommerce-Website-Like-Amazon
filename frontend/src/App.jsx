import { Outlet } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-Shop</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <Container className="mt-3">
        <main>
          <Outlet />
        </main>
      </Container>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </>
  );
}

export default App;
