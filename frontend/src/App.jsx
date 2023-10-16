import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Link to="/">E-Shop</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
