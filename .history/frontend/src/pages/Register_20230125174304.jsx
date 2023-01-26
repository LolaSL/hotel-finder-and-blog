import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onRegistration } from "../apis/auth";
// import { UserContext } from "../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      
    try {
      const { data } = await onRegistration(values)

      setError('')
      setSuccess(data.message)
      setValues({ email: '', password: '' })
      navigate(redirect || "/");
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }

    

  return (
    <Container className="container">
      <div>
        <h1 className="font-weight-light display-1 text-center">Register</h1>
      </div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className='form-control'
            onChange={(e) => onChange(e)}
            value={values.email}
            autoComplete="username"
            id="name"
            name
            placeholder='Name'
            required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            className='form-control'
            id='email'
            name='email'
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Group>
        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>
        <div className="mb-3">
          <Button type="submit">Register</Button>
        </div>
        <div className="mb-3">
          Already have an account?{" "}
          <Link to={`/login?redirect=${redirect}`}>Log-In</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
