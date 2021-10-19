import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle,processLogin,error} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_url)
      })
  }


  return (
    <div>
      <h2 className="text-center mt-5">Login</h2>
      <Form onSubmit={processLogin} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div  className="row mb-3 text-danger">{error}</div>
        <Button className="w-100" variant="primary" type="submit">
          submit
        </Button>
        <br />
        <Button
          className="mt-3 w-100"
          variant="success"
          onClick={handleGoogleLogin}
        >
          Sign In With Google
        </Button>
        <div className="d-flex mt-3 justify-content-center">
          <p className="me-2">New To Union Medical?</p>
          <Link to="/register">Register</Link>
        </div>
      </Form>
    </div>
    
  );
};

export default Login;