import React,  { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onRegistration } from "../apis/auth";
import { Helmet } from "react-helmet-async";
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';


const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
const { userInfo } = state;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios(values);
      setError("");
      setSuccess(data.message);
      setValues({ email: "", password: "" });
      ctxDispatch({ type: 'USER_REGISTER', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    
      setSuccess("");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <Container className="small-container">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div>
        <h1 className="font-weight-light display-1 text-center">Register</h1>
      </div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            value={values.name}
            id="email"
            name="name"
            placeholder="Name"
            className="form-control"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            type="email"
            required
            id="email"
            name="email"
            className="form-control"
            value={values.email}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            type="password"
            value={values.password}
            placeholder="Password"
            className="form-control"
            id="password"
            name="password"
            required
            autoComplete="new-password"
          />
        </Form.Group>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
        <div className="mb-3">
          <Button type="submit">Register</Button>
        </div>
        <div className="mb-3">
          Already have an account?{" "}
          <Link className="link" to={`/login?redirect=${redirect}`}>
            Log In
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
