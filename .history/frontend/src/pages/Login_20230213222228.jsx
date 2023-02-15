import React, {  useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onLogin } from "../apis/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { Helmet } from "react-helmet-async";
import { toast} from "react-toastify";
import { Store } from "../Store";
import { getError } from "../utils";


const Login = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await onLogin(values);
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (error) {
      toast.error(getError(error));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigat
     
    }
  }, [navigate, redirect, userInfo]);


  return (
    <Container className="small-container">
     <Helmet>
        <title>Log In</title>
      </Helmet>
      <h1 className="font-weight-light display-1 text-center">Log In</h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
         onChange={(e) => onChange(e)}
         type='email'
         className='form-control'
         id='email'
         name='email'
         value={values.email}
         placeholder='email'
         required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
      onChange={(e) => onChange(e)}
      type='password'
      value={values.password}
      className='form-control'
      id='password'
      name='password'
      placeholder='password'
      required
            autoComplete="current-password"
          />
        </Form.Group>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div className="mb-3">
          <Button type="submit">Login</Button>
        </div>
        <div className="mb-3">
          New User?{" "}
          <Link className="link" to={`/register?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
