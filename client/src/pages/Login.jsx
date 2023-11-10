import  { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';

function Login () {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


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
            value={formState.password}
            onChange={handleChange}
          />
        </Form.Group >
        <div className='flex-row flex-end'>
          <Button type='submit'> Submit </Button>
        </div>
        {/* <Button
          disabled={!(formState.email && formState.password)}
          type="submit"
          variant="success">
          Submit
        </Button> */}
      </Form>
    </div>
  );
}

export default Login;


{/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
<Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
  Something went wrong with your login credentials!
</Alert> */}