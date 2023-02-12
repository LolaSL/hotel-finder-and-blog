import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
      <Spinner className="spinner" animation="grow">
          <span className="visually-hidden">Loading...</span>
          </Spinner>
  )
}

export default Loader;