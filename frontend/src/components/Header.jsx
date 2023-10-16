import { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { store } from '../Store/StoreProvider.jsx';

const Header = () => {
  const { state } = useContext(store);
  const { cart } = state;
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>E-Shop</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto  w-100  justify-content-end">
            <Link className="nav-link" to="/cart">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
