import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'

const Register = () => {
  const { signInUsingGoogle,  handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,isLogIn,error } = useAuth();
  return (
    <div>
      <h2 className="text-center mt-5">Register</h2>
      <Form onSubmit={handleRegistration} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name </Form.Label>
          <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleEmailChange}  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        <div  className="row mb-3 text-danger">{error}</div>
        <Button className="w-100 btn-primary" type="submit">
        { isLogIn ? 'Login' : 'Register'}
        </Button>
        <br />
        <Button
          className="mt-3 w-100"
          variant="success"
          onClick={signInUsingGoogle}
        >
          Register In With Google
        </Button>
        <div className="d-flex mt-3 justify-content-center">
          <p  className="me-2">Already Have Account?</p>
          <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;