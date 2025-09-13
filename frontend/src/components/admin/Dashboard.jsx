import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

export default function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.ANALYTICS, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      setAnalytics(res.data);
    } catch (err) {
      console.error('Analytics fetch error:', err);
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
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        Dashboard
      </h1>
      
      {analytics ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            padding: '30px',
            borderRadius: '12px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(52,152,219,0.3)'
          }}>
            <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>
              {analytics.totalProducts}
            </div>
            <div style={{ fontSize: '18px', opacity: '0.9' }}>Toplam Ürün</div>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            padding: '30px',
            borderRadius: '12px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(231,76,60,0.3)'
          }}>
            <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>
              {analytics.totalContacts}
            </div>
            <div style={{ fontSize: '18px', opacity: '0.9' }}>Toplam İletişim</div>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
            padding: '30px',
            borderRadius: '12px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(243,156,18,0.3)'
          }}>
            <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>
              {analytics.recentContacts}
            </div>
            <div style={{ fontSize: '18px', opacity: '0.9' }}>Son 30 Gün</div>
          </div>

        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px', 
          color: '#7f8c8d',
          fontSize: '18px'
        }}>
          Analytics verileri yüklenemedi.
        </div>
      )}
    </div>
  );
} 