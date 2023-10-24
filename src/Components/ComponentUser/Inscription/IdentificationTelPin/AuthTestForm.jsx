// AuthTestForm.js
import React, { useState } from 'react';
import axios from 'axios';

function AuthForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/register', { phoneNumber, password });
      alert('User registered successfully');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { phoneNumber, password });
      localStorage.setItem('token', response.data.token);
      alert('Logged in successfully');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthForm;
