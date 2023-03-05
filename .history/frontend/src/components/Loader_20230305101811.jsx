import Rings from 'react-bootstrap/Rings';

export default function Loader() {
  return (
    <Rings animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Rings>
  );
}