import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.CONTACTS, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      setContacts(res.data);
    } catch (err) {
      console.error('Contacts fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        background: '#fff', 
        borderRadius: '12px', 
        padding: '40px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '18px', color: '#7f8c8d' }}>Yükleniyor...</div>
      </div>
    );
  }

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
        İletişim Talepleri
      </h1>

      {contacts.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px', 
          color: '#7f8c8d',
          fontSize: '18px'
        }}>
          Henüz iletişim talebi yok.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {contacts.map(contact => (
            <div key={contact._id} style={{ 
              border: '1px solid #e1e8ed', 
              borderRadius: '12px', 
              padding: '24px', 
              background: '#f8f9fa',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px',
                marginBottom: '16px'
              }}>
                <div>
                  <strong style={{ color: '#2c3e50' }}>Ad:</strong> {contact.name}
                </div>
                <div>
                  <strong style={{ color: '#2c3e50' }}>E-posta:</strong> {contact.email}
                </div>
                <div>
                  <strong style={{ color: '#2c3e50' }}>Telefon:</strong> {contact.phone}
                </div>
                <div>
                  <strong style={{ color: '#2c3e50' }}>Tarih:</strong> {new Date(contact.createdAt).toLocaleString('tr-TR')}
                </div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <strong style={{ color: '#2c3e50' }}>Mesaj:</strong>
                <p style={{ 
                  marginTop: '8px', 
                  color: '#7f8c8d',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  {contact.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 