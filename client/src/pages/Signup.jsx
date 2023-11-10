import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import {Form, Button, Alert} from 'react-bootstrap'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="flex-row space-between my-2">
          <Form.Label htmlFor="firstName">First Name:</Form.Label>
          <Form.Control
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="flex-row space-between my-2">
          <Form.Label htmlFor="lastName">Last Name:</Form.Label>
          <Form.Control
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </Form.Group > 
        <Form.Group className="flex-row space-between my-2">
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="flex-row space-between my-2">
          <Form.Label htmlFor="pwd">Password:</Form.Label>
          <Form.Control
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Form.Group>
        <div className='flex-row flex-end'>
          <Button 
          type='submit'> Submit
          </Button>
        </div>
        {/* <Button
          disabled={!(formState.email && formState.password && formState.addUser)}
          type="submit"
          variant="success">
          Submit
        </Button> */}
      </Form>
    </div>
  );
}

export default Signup;
