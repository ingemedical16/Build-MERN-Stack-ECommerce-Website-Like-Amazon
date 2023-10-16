import { Container, Spinner } from 'react-bootstrap';

const LoadingBox = () => {
  return (
    <Container className="text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingBox;
