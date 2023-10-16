import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
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
