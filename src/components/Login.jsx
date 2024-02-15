import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setLoggedIn } from '../rdx/slice.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, loggedIn } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      try {
        // Replace 'your-backend-endpoint' with the actual endpoint for your authentication
        const response = await axios.post('http://localhost:8080/api/login', {
          username,
          password,
        });

        // Assuming the backend returns a token or some authentication info
        const authToken = response.data.token;
        console.log(authToken)


        // Update the Redux state with login information
        dispatch(setLoggedIn(true));

        // Redirect to the authenticated route
        navigate('/');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
