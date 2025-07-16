import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

export default function Drawings() {
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrawings = async () => {
      try {
        const res = await axios.get('/api/drawings');
        setDrawings(res.data);
      } catch (err) {
        console.error('Proje çizimleri yükleme hatası:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrawings();
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--steel-light)', minHeight: '100vh' }}>
      <Helmet>
        <title>Proje Çizimleri | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="IZMAK proje çizimleri - Makine yedek parça, kalıp imalatı ve CNC işleme teknik çizimleri." />
        <meta property="og:title" content="Proje Çizimleri | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="IZMAK proje çizimleri - Makine yedek parça, kalıp imalatı ve CNC işleme teknik çizimleri." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com/drawings" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proje Çizimleri | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta name="twitter:description" content="IZMAK proje çizimleri - Makine yedek parça, kalıp imalatı ve CNC işleme teknik çizimleri." />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      {/* Hero Section */}
      <section style={{
        width: '100%',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)',
        color: 'var(--chrome-primary)',
        padding: '64px 16px 48px 16px',
        position: 'relative',
        boxShadow: 'var(--shadow-metallic)',
      }}>
        <h1 style={{ 
          fontSize: 48, 
          fontWeight: 900, 
          marginBottom: 18, 
          textAlign: 'center', 
          lineHeight: 1.1, 
          color: 'var(--chrome-primary)', 
          textShadow: '0 2px 16px #fff8' 
        }}>
          Proje Çizimleri
        </h1>
        <p style={{ 
          color: 'var(--chrome-secondary)', 
          fontSize: 20, 
          marginBottom: 18, 
          textAlign: 'center', 
          maxWidth: 600, 
          fontWeight: 500 
        }}>
          IZMAK'in teknik çizim ve tasarım projelerinden örnekler
        </p>
      </section>

      {/* Drawings Content */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--steel-dark)' }}>
              <div style={{ fontSize: 20 }}>Proje çizimleri yükleniyor...</div>
            </div>
          ) : drawings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--steel-dark)' }}>
              <div style={{ fontSize: 20 }}>Henüz proje çizimi eklenmemiş</div>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', 
              gap: 32 
            }}>
              {drawings.map((item) => (
                <div key={item._id} style={{ 
                  background: 'var(--steel-light)', 
                  borderRadius: 12, 
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-steel)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => window.open(item.imageUrl, '_blank')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-6px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'var(--shadow-steel)';
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: 400, 
                    background: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0';
                    }}>
                      <div style={{
                        background: 'rgba(0,0,0,0.8)',
                        color: 'white',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        Görüntülemek için tıklayın
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    padding: '16px 20px',
                    background: 'var(--steel-light)',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{ 
                      fontSize: 18, 
                      fontWeight: 600, 
                      margin: 0, 
                      color: 'var(--chrome-primary)',
                      textAlign: 'center'
                    }}>
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 