import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { onLogin } from "../apis/auth";
import { useDispatch } from "react-redux";
import { onRegistration } from "../apis/auth";


const UpdateUser = () => {
  const [values, setValues] = useState({
    name: "",
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
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Container className="container">
      <h1 className="font-weight-light display-1 text-center">Update User</h1>

      <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group className="mb-3 fw-bold" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
              className='form-control'
              id='name'
              name='name'
            type="name"
            value={values.name}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="name">
          <Form.Label>Email</Form.Label>
          <Form.Control
              className='form-control'
              id='email'
              name='email'
            type="email"
            value={values.email}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
              className='form-control'
              id='password'
              name='password'
            value={values.password}
            type="password"
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div className="mb-3">
          <Button disabled="" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default UpdateUser;
