import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get('/api/gallery');
        setGallery(res.data);
      } catch (err) {
        console.error('Galeri yükleme hatası:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--steel-light)', minHeight: '100vh' }}>
      <Helmet>
        <title>Galeri | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="IZMAK galeri - Makine yedek parça, kalıp imalatı ve CNC işleme projelerimizden örnekler." />
        <meta property="og:title" content="Galeri | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="IZMAK galeri - Makine yedek parça, kalıp imalatı ve CNC işleme projelerimizden örnekler." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com/gallery" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta name="twitter:description" content="IZMAK galeri - Makine yedek parça, kalıp imalatı ve CNC işleme projelerimizden örnekler." />
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
          Galeri
        </h1>
        <p style={{ 
          color: 'var(--chrome-secondary)', 
          fontSize: 20, 
          marginBottom: 18, 
          textAlign: 'center', 
          maxWidth: 600, 
          fontWeight: 500 
        }}>
          IZMAK'in başarıyla tamamladığı projelerden örnekler
        </p>
      </section>

      {/* Gallery Content */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--steel-dark)' }}>
              <div style={{ fontSize: 20 }}>Galeri yükleniyor...</div>
            </div>
          ) : gallery.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--steel-dark)' }}>
              <div style={{ fontSize: 20 }}>Henüz galeri görseli eklenmemiş</div>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', 
              gap: 32 
            }}>
              {gallery.map((item) => (
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
                    height: 500, 
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