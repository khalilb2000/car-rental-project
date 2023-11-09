import  { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';

function Login () {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
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
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group  className="flex-row space-between my-2">
          <Form.Label  htmlFor="email">Email address:</Form.Label >
          <Form.Control
            placeholder="youremail@test.com"
            name="email"
            type="text"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Group >
        <Form.Group  className="flex-row space-between my-2">
          <Form.Label  htmlFor="pwd">Password:</Form.Label >
          <Form.Control
            placeholder="******"
            name="password"
            type="text"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Group >
        {/* <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div> */}
      </Form>
    </div>
  );
}

export default Login;
