import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useDispatch } from "react-redux";

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
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => onChange(e)} required />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="email"
            onChange={(e) => onChange(e)}
          
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
