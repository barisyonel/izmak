import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from './config';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(API_ENDPOINTS.LOGIN, { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/admin');
    } catch (err) {
      setError('Giriş başarısız!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Girişi</h2>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Kullanıcı adı"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Giriş Yap</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
} 