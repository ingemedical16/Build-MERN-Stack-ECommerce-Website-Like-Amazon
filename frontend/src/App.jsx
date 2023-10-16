import { Outlet } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="site-contaner d-flex flex-column">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-Shop</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
