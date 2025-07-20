import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

export default function Profile() {
  const [newUsername, setNewUsername] = useState('');
  const [usernamePassword, setUsernamePassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    if (!newUsername || !usernamePassword) {
      alert('Tüm alanları doldurun');
      return;
    }

    try {
      await axios.patch(API_ENDPOINTS.ADMIN_USERNAME, {
        newUsername,
        password: usernamePassword
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

      alert('Kullanıcı adı başarıyla değiştirildi!');
      setNewUsername('');
      setUsernamePassword('');
    } catch (err) {
      console.error('Username change error:', err);
      alert('Kullanıcı adı değiştirilirken hata oluştu');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert('Tüm alanları doldurun');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Yeni şifreler eşleşmiyor');
      return;
    }

    try {
      await axios.patch(API_ENDPOINTS.ADMIN_PASSWORD, {
        oldPassword,
        newPassword
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

      alert('Şifre başarıyla değiştirildi!');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error('Password change error:', err);
      alert('Şifre değiştirilirken hata oluştu');
    }
  };

  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '12px', 
      padding: '40px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        color: '#2c3e50', 
        marginBottom: '40px' 
      }}>
        Profil Ayarları
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '40px' 
      }}>
        {/* Kullanıcı Adı Değiştirme */}
        <div style={{
          border: '1px solid #e1e8ed',
          borderRadius: '12px',
          padding: '30px',
          background: '#f8f9fa'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '24px', 
            color: '#2c3e50' 
          }}>
            Kullanıcı Adı Değiştir
          </h3>
          <form onSubmit={handleUsernameChange}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#2c3e50',
                fontSize: '16px'
              }}>
                Yeni Kullanıcı Adı
              </label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Yeni kullanıcı adı"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#2c3e50',
                fontSize: '16px'
              }}>
                Mevcut Şifre
              </label>
              <input
                type="password"
                value={usernamePassword}
                onChange={(e) => setUsernamePassword(e.target.value)}
                placeholder="Mevcut şifreniz"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Kullanıcı Adını Değiştir
            </button>
          </form>
        </div>

        {/* Şifre Değiştirme */}
        <div style={{
          border: '1px solid #e1e8ed',
          borderRadius: '12px',
          padding: '30px',
          background: '#f8f9fa'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '24px', 
            color: '#2c3e50' 
          }}>
            Şifre Değiştir
          </h3>
          <form onSubmit={handlePasswordChange}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#2c3e50',
                fontSize: '16px'
              }}>
                Mevcut Şifre
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Mevcut şifreniz"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#2c3e50',
                fontSize: '16px'
              }}>
                Yeni Şifre
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Yeni şifre"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#2c3e50',
                fontSize: '16px'
              }}>
                Yeni Şifre (Tekrar)
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Yeni şifre tekrar"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Şifreyi Değiştir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 