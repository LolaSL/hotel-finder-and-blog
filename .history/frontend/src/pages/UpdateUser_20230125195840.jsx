
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



const UpdateUser = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
      const [error, setError] = useState(false);
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const dispatch = useDispatch();
    
      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          await onLogin(values);
          dispatch(authenticateUser());
          localStorage.setItem("isAuth", "true");
          navigate(redirect || "/");
        } catch (error) {
          console.log(error.response.data.errors[0].msg);
          setError(error.response.data.errors[0].msg);
        }
      };
    
  return (
    <Container className="container">
 
    <h1 className="font-weight-light display-1 text-center">Update User</h1>

      <Form >
        <Form.Group className="mb-3 fw-bold" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            // value={email}
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button disabled="" type="submit">
            Update
          </Button>
        
        </div>
      </Form>

  </Container>
  )
}

export default UpdateUser;